# elfist

Simple ELF Parser Library for TypeScript.

For usage example, see [demo/elf-dump.ts](demo/elf-dump.ts).

## Known limitations

- Big Endian ELF files are not supported.
- No input validation (we assume valid ELF file).
- 64-Bit ELF files are partially supported - values (like memory addresses) must be smaller than 2^53.

## License

Released under the MIT licence. Copyright (c) 2022, Uri Shaked.
