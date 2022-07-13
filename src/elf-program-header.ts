import { ProgramHeaderType } from './elf-enum';
import { ELFWord } from './elf-types';
import { ELFStructReader } from './elf-struct-reader';

export interface ELFProgramHeader {
  type: ProgramHeaderType;
  flags: number;
  offset: ELFWord;
  vaddr: ELFWord;
  paddr: ELFWord;
  filesz: ELFWord;
  memsz: ELFWord;
  align: ELFWord;
}

export function parseProgramHeader(reader: ELFStructReader): ELFProgramHeader {
  const type = reader.readUint32();
  let flags = reader.word64Bit ? reader.readUint32() : 0;
  const offset = reader.readWord();
  const vaddr = reader.readWord();
  const paddr = reader.readWord();
  const filesz = reader.readWord();
  const memsz = reader.readWord();
  if (!reader.word64Bit) {
    flags = reader.readUint32();
  }
  return {
    type,
    flags,
    offset,
    vaddr,
    paddr,
    filesz,
    memsz,
    align: reader.readWord(),
  };
}
