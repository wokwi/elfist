import { IStringTable } from './elf-types';
import { ELFStructReader } from './elf-struct-reader';

export interface ELFSymbol {
  name: string;
  value: number;
  size: number;
  info: number;
  other: number;
  shndx: number;
}

export function parseSymbol(reader: ELFStructReader, stringTable: IStringTable) {
  const name = stringTable.getString(reader.readUint32());
  let value = reader.word64Bit ? 0 : reader.readUint32();
  let size = reader.word64Bit ? 0 : reader.readUint32();
  const info = reader.readUint8();
  const other = reader.readUint8();
  const shndx = reader.readUint16();
  if (reader.word64Bit) {
    value = reader.readUint64();
    size = reader.readUint64();
  }
  return {
    name,
    value,
    size,
    info,
    other,
    shndx,
  };
}
