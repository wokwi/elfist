import fs from 'fs';
import {
  ELFParser,
  ProgramHeaderType,
  SectionHeaderType,
  SectionHeaderFlag,
  ELFType,
  OSABI,
  Machine,
} from '../src/index';
import { hexPrint } from './hex';

if (process.argv.length !== 3) {
  console.error('Usage: elf-dump.ts <filename.elf>');
  process.exit(1);
}

const elfFile = fs.readFileSync(process.argv[2]);
const elf = new ELFParser(elfFile);

function headerFlags(value: number) {
  const result: string[] = [];
  for (let i = 0; i < 32; i++) {
    const mask = 1 << i;
    if (value & mask) {
      result.push(SectionHeaderFlag[mask] ?? `0x${mask.toString(16)}`);
    }
  }
  return result.join(',');
}

console.log('ELF Header');
const { header, sections, program, symbols } = elf;
const { ident } = header;
console.log('- Magic:', JSON.stringify(ident.mag));
console.log('- Class:', ident.class === 1 ? '32 bit' : ident.class === 2 ? '64 bit' : ident.class);
console.log('- Type:', ELFType[header.type] ?? header.type);
console.log('- ABI:', OSABI[ident.osabi] ?? ident.osabi);
console.log('- Machine:', Machine[header.machine] ?? header.machine);

console.log('\nSections:');
console.table(
  sections
    .filter((section) => section.type)
    .map((section) => ({
      name: section.name,
      type: SectionHeaderType[section.type] ?? hexPrint(section.type),
      offset: section.offset,
      size: section.size,
      entSize: section.entsize,
    }))
);

console.log('\nProgram Headers:');
console.table(
  program.map((item) => ({
    type: ProgramHeaderType[item.type] ?? `0x${item.type.toString(16)}`,
    flags: headerFlags(item.flags),
    vaddr: hexPrint(item.vaddr),
    paddr: hexPrint(item.paddr),
    memSize: item.memsz,
    offset: item.offset,
    fileSize: item.filesz,
  }))
);

console.log('\nSymbols:');
console.table(
  symbols.map((symbol) => ({
    name: symbol.name,
    section: sections[symbol.shndx]?.name ?? symbol.shndx,
    value: hexPrint(symbol.value),
    size: symbol.size,
  }))
);
