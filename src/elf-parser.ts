import { SectionHeaderType } from './elf-enum';
import { ELFHeader, parseHeader } from './elf-header';
import { ELFProgramHeader, parseProgramHeader } from './elf-program-header';
import { ELFSectionHeader, parseSectionHeader } from './elf-section';
import { ELFSymbol, parseSymbol } from './elf-symbol';
import { IStringTable } from './elf-types';
import { ELFStructReader } from './elf-struct-reader';

export const StringTableSectionName = '.strtab';

export class ELFParser implements IStringTable {
  readonly header: ELFHeader;
  readonly sections: ELFSectionHeader[] = [];
  readonly program: ELFProgramHeader[] = [];

  readonly reader: ELFStructReader;
  readonly symbols: ELFSymbol[] = [];

  private readonly stringSection?: ELFSectionHeader;

  constructor(elfData: Uint8Array) {
    const reader = (this.reader = new ELFStructReader(elfData));
    this.header = parseHeader(reader);
    const { shoff, shentsize, shnum, phoff, phentsize, phnum, shstrndx } = this.header;
    for (let i = 0; i < shnum; i++) {
      reader.seek(shoff + i * shentsize);
      this.sections.push(parseSectionHeader(reader));
    }
    const sectionHeadersStringsOffset = this.sections[shstrndx].offset;
    for (const section of this.sections) {
      reader.seek(sectionHeadersStringsOffset + section.nameIndex);
      section.name = reader.readNullTerminated();
    }
    this.stringSection = this.sections.find(
      (s) => s.name === StringTableSectionName && s.type === SectionHeaderType.STRTAB
    );
    for (let i = 0; i < phnum; i++) {
      reader.seek(phoff + i * phentsize);
      this.program.push(parseProgramHeader(reader));
    }
    const symbolTable = this.sections.find((s) => s.type === SectionHeaderType.SYMTAB);
    if (symbolTable) {
      reader.seek(symbolTable.offset);
      for (let offset = 0; offset < symbolTable.size; offset += symbolTable.entsize) {
        this.symbols.push(parseSymbol(reader, this));
      }
    }
  }

  getString(index: number) {
    const { reader, stringSection } = this;
    if (!stringSection) {
      return '';
    }
    const prevOffset = reader.seek(stringSection.offset + index);
    const result = reader.readNullTerminated();
    reader.seek(prevOffset);
    return result;
  }
}
