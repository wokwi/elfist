import { SectionHeaderType } from './elf-enum';
import { ELFWord } from './elf-types';
import { ELFStructReader } from './elf-struct-reader';

export interface ELFSectionHeader {
  name: string;
  nameIndex: number;
  type: SectionHeaderType;
  flags: ELFWord;
  addr: ELFWord;
  offset: ELFWord;
  size: ELFWord;
  link: number;
  info: number;
  addralign: ELFWord;
  entsize: ELFWord;
}

export function parseSectionHeader(reader: ELFStructReader): ELFSectionHeader {
  return {
    name: '',
    nameIndex: reader.readUint32(),
    type: reader.readUint32(),
    flags: reader.readWord(),
    addr: reader.readWord(),
    offset: reader.readWord(),
    size: reader.readWord(),
    link: reader.readUint32(),
    info: reader.readUint32(),
    addralign: reader.readWord(),
    entsize: reader.readWord(),
  };
}
