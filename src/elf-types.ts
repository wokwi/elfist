/** Either 32 or 64 bit, depending on the ELF type */
export type ELFWord = number;

export interface IStringTable {
  getString(index: number): string;
}
