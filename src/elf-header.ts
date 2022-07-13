import { ELFWord } from './elf-types';
import { ELFStructReader } from './elf-struct-reader';

export interface ELFHeaderIdent {
  /** Magic number: 0x7F followed by ELF(45 4c 46) */
  mag: string;

  /** Format: 1 for 32-bit, 2 for 64-bit */
  class: number;

  /** Endianess: 1 for little-endian, 2 for big-endian (not supported) */
  data: number;

  /** Always 1 */
  version: number;

  /** OS ABI */
  osabi: number;
  abiversion: number;
}

export interface ELFHeader {
  ident: ELFHeaderIdent;

  /** Object file type */
  type: number;

  /** Target instruction set architecture. */
  machine: number;

  /** Always 1 */
  version: number;

  /** Entry point memory address */
  entry: ELFWord;

  /** Program header table offset */
  phoff: ELFWord;

  /** Section header table offset */
  shoff: ELFWord;

  flags: number;

  /** Size of the header (52 bytes for 32-bit, 64 bytes for 64-bit) */
  ehsize: number;

  /** Program header table entry size */
  phentsize: number;

  /** Program header table entry count */
  phnum: number;

  /** Section header table entry size */
  shentsize: number;

  /** Section header table entry count */
  shnum: number;

  /** String table index (in the section header table) */
  shstrndx: number;
}

export function parseHeader(reader: ELFStructReader): ELFHeader {
  const ident: ELFHeaderIdent = {
    mag: reader.readChars(4),
    class: reader.readUint8(),
    data: reader.readUint8(),
    version: reader.readUint8(),
    osabi: reader.readUint8(),
    abiversion: reader.readUint8(),
  } as any;
  reader.skip(7); /* padding */
  reader.word64Bit = ident.class === 2;
  return {
    ident,
    type: reader.readUint16(),
    machine: reader.readUint16(),
    version: reader.readUint32(),
    entry: reader.readWord(),
    phoff: reader.readWord(),
    shoff: reader.readWord(),
    flags: reader.readUint32(),
    ehsize: reader.readUint16(),
    phentsize: reader.readUint16(),
    phnum: reader.readUint16(),
    shentsize: reader.readUint16(),
    shnum: reader.readUint16(),
    shstrndx: reader.readUint16(),
  };
}
