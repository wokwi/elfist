export enum ELFType {
  /** No file type */
  NONE = 0,
  /** Relocatable file */
  REL = 1,
  /** Executable file */
  EXEC = 2,
  /** Shared object file */
  DYN = 3,
  /** Core file */
  CORE = 4,
  /** Operating system-specific */
  LOOS = 0xfe00,
  /** Operating system-specific */
  HIOS = 0xfeff,
  /** Processor-specific */
  LOPROC = 0xff00,
  /** Processor-specific */
  HIPROC = 0xffff,
}

export enum OSABI {
  /**	No extensions or unspecified */
  NONE = 0,
  /**	Hewlett-Packard HP-UX */
  HPUX = 1,
  /**	NetBSD */
  NETBSD = 2,
  /**	GNU / Linux */
  GNU = 3,
  /**	Sun Solaris */
  SOLARIS = 6,
  /**	AIX */
  AIX = 7,
  /**	IRIX */
  IRIX = 8,
  /**	FreeBSD */
  FREEBSD = 9,
  /**	Compaq TRU64 UNIX */
  TRU64 = 10,
  /**	Novell Modesto */
  MODESTO = 11,
  /**	Open BSD */
  OPENBSD = 12,
  /**	Open VMS */
  OPENVMS = 13,
  /**	Hewlett-Packard Non-Stop Kernel */
  NSK = 14,
  /**	Amiga Research OS */
  AROS = 15,
  /**	The FenixOS highly scalable multi-core OS */
  FENIXOS = 16,
  /**	Nuxi CloudABI */
  CLOUDABI = 17,
  /**	Stratus Technologies OpenVOS */
  OPENVOS = 18,
}

export enum Machine {
  /**	No machine */
  EM_NONE = 0,
  /**	AT&T WE 32100 */
  EM_M32 = 1,
  /**	SPARC */
  EM_SPARC = 2,
  /**	Intel 80386 */
  EM_386 = 3,
  /**	Motorola 68000 */
  EM_68K = 4,
  /**	Motorola 88000 */
  EM_88K = 5,
  /**	Intel MCU */
  EM_IAMCU = 6,
  /**	Intel 80860 */
  EM_860 = 7,
  /**	MIPS I Architecture */
  EM_MIPS = 8,
  /**	IBM System/370 Processor */
  EM_S370 = 9,
  /**	MIPS RS3000 Little-endian */
  EM_MIPS_RS3_LE = 10,
  /**	Hewlett-Packard PA-RISC */
  EM_PARISC = 15,
  /**	Fujitsu VPP500 */
  EM_VPP500 = 17,
  /**	Enhanced instruction set SPARC */
  EM_SPARC32PLUS = 18,
  /**	Intel 80960 */
  EM_960 = 19,
  /**	PowerPC */
  EM_PPC = 20,
  /**	64-bit PowerPC */
  EM_PPC64 = 21,
  /**	IBM System/390 Processor */
  EM_S390 = 22,
  /**	IBM SPU/SPC */
  EM_SPU = 23,
  /**	NEC V800 */
  EM_V800 = 36,
  /**	Fujitsu FR20 */
  EM_FR20 = 37,
  /**	TRW RH-32 */
  EM_RH32 = 38,
  /**	Motorola RCE */
  EM_RCE = 39,
  /**	ARM 32-bit architecture (AARCH32) */
  EM_ARM = 40,
  /**	Digital Alpha */
  EM_ALPHA = 41,
  /**	Hitachi SH */
  EM_SH = 42,
  /**	SPARC Version 9 */
  EM_SPARCV9 = 43,
  /**	Siemens TriCore embedded processor */
  EM_TRICORE = 44,
  /**	Argonaut RISC Core, Argonaut Technologies Inc */
  EM_ARC = 45,
  /**	Hitachi H8/300 */
  EM_H8_300 = 46,
  /**	Hitachi H8/300H */
  EM_H8_300H = 47,
  /**	Hitachi H8S */
  EM_H8S = 48,
  /**	Hitachi H8/500 */
  EM_H8_500 = 49,
  /**	Intel IA-64 processor architecture */
  EM_IA_64 = 50,
  /**	Stanford MIPS-X */
  EM_MIPS_X = 51,
  /**	Motorola ColdFire */
  EM_COLDFIRE = 52,
  /**	Motorola M68HC12 */
  EM_68HC12 = 53,
  /**	Fujitsu MMA Multimedia Accelerator */
  EM_MMA = 54,
  /**	Siemens PCP */
  EM_PCP = 55,
  /**	Sony nCPU embedded RISC processor */
  EM_NCPU = 56,
  /**	Denso NDR1 microprocessor */
  EM_NDR1 = 57,
  /**	Motorola Star*Core processor */
  EM_STARCORE = 58,
  /**	Toyota ME16 processor */
  EM_ME16 = 59,
  /**	STMicroelectronics ST100 processor */
  EM_ST100 = 60,
  /**	Advanced Logic Corp. TinyJ embedded processor family */
  EM_TINYJ = 61,
  /**	AMD x86-64 architecture */
  EM_X86_64 = 62,
  /**	Sony DSP Processor */
  EM_PDSP = 63,
  /**	Digital Equipment Corp. PDP-10 */
  EM_PDP10 = 64,
  /**	Digital Equipment Corp. PDP-11 */
  EM_PDP11 = 65,
  /**	Siemens FX66 microcontroller */
  EM_FX66 = 66,
  /**	STMicroelectronics ST9+ 8/16 bit microcontroller */
  EM_ST9PLUS = 67,
  /**	STMicroelectronics ST7 8-bit microcontroller */
  EM_ST7 = 68,
  /**	Motorola MC68HC16 Microcontroller */
  EM_68HC16 = 69,
  /**	Motorola MC68HC11 Microcontroller */
  EM_68HC11 = 70,
  /**	Motorola MC68HC08 Microcontroller */
  EM_68HC08 = 71,
  /**	Motorola MC68HC05 Microcontroller */
  EM_68HC05 = 72,
  /**	Silicon Graphics SVx */
  EM_SVX = 73,
  /**	STMicroelectronics ST19 8-bit microcontroller */
  EM_ST19 = 74,
  /**	Digital VAX */
  EM_VAX = 75,
  /**	Axis Communications 32-bit embedded processor */
  EM_CRIS = 76,
  /**	Infineon Technologies 32-bit embedded processor */
  EM_JAVELIN = 77,
  /**	Element 14 64-bit DSP Processor */
  EM_FIREPATH = 78,
  /**	LSI Logic 16-bit DSP Processor */
  EM_ZSP = 79,
  /**	Donald Knuth's educational 64-bit processor */
  EM_MMIX = 80,
  /**	Harvard University machine-independent object files */
  EM_HUANY = 81,
  /**	SiTera Prism */
  EM_PRISM = 82,
  /**	Atmel AVR 8-bit microcontroller */
  EM_AVR = 83,
  /**	Fujitsu FR30 */
  EM_FR30 = 84,
  /**	Mitsubishi D10V */
  EM_D10V = 85,
  /**	Mitsubishi D30V */
  EM_D30V = 86,
  /**	NEC v850 */
  EM_V850 = 87,
  /**	Mitsubishi M32R */
  EM_M32R = 88,
  /**	Matsushita MN10300 */
  EM_MN10300 = 89,
  /**	Matsushita MN10200 */
  EM_MN10200 = 90,
  /**	picoJava */
  EM_PJ = 91,
  /**	OpenRISC 32-bit embedded processor */
  EM_OPENRISC = 92,
  /**	ARC International ARCompact processor (old spelling/synonym: EM_ARC_A5 = ), /** */
  EM_ARC_COMPACT = 93,
  /**	Tensilica Xtensa Architecture */
  EM_XTENSA = 94,
  /**	Alphamosaic VideoCore processor */
  EM_VIDEOCORE = 95,
  /**	Thompson Multimedia General Purpose Processor */
  EM_TMM_GPP = 96,
  /**	National Semiconductor 32000 series */
  EM_NS32K = 97,
  /**	Tenor Network TPC processor */
  EM_TPC = 98,
  /**	Trebia SNP 1000 processor */
  EM_SNP1K = 99,
  /**	STMicroelectronics (www.st.com) ST200 microcontroller */
  EM_ST200 = 100,
  /**	Ubicom IP2xxx microcontroller family */
  EM_IP2K = 101,
  /**	MAX Processor */
  EM_MAX = 102,
  /**	National Semiconductor CompactRISC microprocessor */
  EM_CR = 103,
  /**	Fujitsu F2MC16 */
  EM_F2MC16 = 104,
  /**	Texas Instruments embedded microcontroller msp430 */
  EM_MSP430 = 105,
  /**	Analog Devices Blackfin (DSP) processor */
  EM_BLACKFIN = 106,
  /**	S1C33 Family of Seiko Epson processors */
  EM_SE_C33 = 107,
  /**	Sharp embedded microprocessor */
  EM_SEP = 108,
  /**	Arca RISC Microprocessor */
  EM_ARCA = 109,
  /**	Microprocessor series from PKU-Unity Ltd. and MPRC of Peking University */
  EM_UNICORE = 110,
  /**	eXcess: 16/32/64-bit configurable embedded CPU */
  EM_EXCESS = 111,
  /**	Icera Semiconductor Inc. Deep Execution Processor */
  EM_DXP = 112,
  /**	Altera Nios II soft-core processor */
  EM_ALTERA_NIOS2 = 113,
  /**	National Semiconductor CompactRISC CRX microprocessor */
  EM_CRX = 114,
  /**	Motorola XGATE embedded processor */
  EM_XGATE = 115,
  /**	Infineon C16x/XC16x processor */
  EM_C166 = 116,
  /**	Renesas M16C series microprocessors */
  EM_M16C = 117,
  /**	Microchip Technology dsPIC30F Digital Signal Controller */
  EM_DSPIC30F = 118,
  /**	Freescale Communication Engine RISC core */
  EM_CE = 119,
  /**	Renesas M32C series microprocessors */
  EM_M32C = 120,
  /**	Altium TSK3000 core */
  EM_TSK3000 = 131,
  /**	Freescale RS08 embedded processor */
  EM_RS08 = 132,
  /**	Analog Devices SHARC family of 32-bit DSP processors */
  EM_SHARC = 133,
  /**	Cyan Technology eCOG2 microprocessor */
  EM_ECOG2 = 134,
  /**	Sunplus S+core7 RISC processor */
  EM_SCORE7 = 135,
  /**	New Japan Radio (NJR) 24-bit DSP Processor */
  EM_DSP24 = 136,
  /**	Broadcom VideoCore III processor */
  EM_VIDEOCORE3 = 137,
  /**	RISC processor for Lattice FPGA architecture */
  EM_LATTICEMICO32 = 138,
  /**	Seiko Epson C17 family */
  EM_SE_C17 = 139,
  /**	The Texas Instruments TMS320C6000 DSP family */
  EM_TI_C6000 = 140,
  /**	The Texas Instruments TMS320C2000 DSP family */
  EM_TI_C2000 = 141,
  /**	The Texas Instruments TMS320C55x DSP family */
  EM_TI_C5500 = 142,
  /**	Texas Instruments Application Specific RISC Processor, 32bit fetch */
  EM_TI_ARP32 = 143,
  /**	Texas Instruments Programmable Realtime Unit */
  EM_TI_PRU = 144,
  /**	STMicroelectronics 64bit VLIW Data Signal Processor */
  EM_MMDSP_PLUS = 160,
  /**	Cypress M8C microprocessor */
  EM_CYPRESS_M8C = 161,
  /**	Renesas R32C series microprocessors */
  EM_R32C = 162,
  /**	NXP Semiconductors TriMedia architecture family */
  EM_TRIMEDIA = 163,
  /**	QUALCOMM DSP6 Processor */
  EM_QDSP6 = 164,
  /**	Intel 8051 and variants */
  EM_8051 = 165,
  /**	STMicroelectronics STxP7x family of configurable and extensible RISC processors */
  EM_STXP7X = 166,
  /**	Andes Technology compact code size embedded RISC processor family */
  EM_NDS32 = 167,
  /**	Cyan Technology eCOG1X family */
  EM_ECOG1 = 168,
  /**	Cyan Technology eCOG1X family */
  EM_ECOG1X = 168,
  /**	Dallas Semiconductor MAXQ30 Core Micro-controllers */
  EM_MAXQ30 = 169,
  /**	New Japan Radio (NJR) 16-bit DSP Processor */
  EM_XIMO16 = 170,
  /**	M2000 Reconfigurable RISC Microprocessor */
  EM_MANIK = 171,
  /**	Cray Inc. NV2 vector architecture */
  EM_CRAYNV2 = 172,
  /**	Renesas RX family */
  EM_RX = 173,
  /**	Imagination Technologies META processor architecture */
  EM_METAG = 174,
  /**	MCST Elbrus general purpose hardware architecture */
  EM_MCST_ELBRUS = 175,
  /**	Cyan Technology eCOG16 family */
  EM_ECOG16 = 176,
  /**	National Semiconductor CompactRISC CR16 16-bit microprocessor */
  EM_CR16 = 177,
  /**	Freescale Extended Time Processing Unit */
  EM_ETPU = 178,
  /**	Infineon Technologies SLE9X core */
  EM_SLE9X = 179,
  /**	Intel L10M */
  EM_L10M = 180,
  /**	Intel K10M */
  EM_K10M = 181,
  /**	ARM 64-bit architecture (AARCH64) */
  EM_AARCH64 = 183,
  /**	Atmel Corporation 32-bit microprocessor family */
  EM_AVR32 = 185,
  /**	STMicroeletronics STM8 8-bit microcontroller */
  EM_STM8 = 186,
  /**	Tilera TILE64 multicore architecture family */
  EM_TILE64 = 187,
  /**	Tilera TILEPro multicore architecture family */
  EM_TILEPRO = 188,
  /**	Xilinx MicroBlaze 32-bit RISC soft processor core */
  EM_MICROBLAZE = 189,
  /**	NVIDIA CUDA architecture */
  EM_CUDA = 190,
  /**	Tilera TILE-Gx multicore architecture family */
  EM_TILEGX = 191,
  /**	CloudShield architecture family */
  EM_CLOUDSHIELD = 192,
  /**	KIPO-KAIST Core-A 1st generation processor family */
  EM_COREA_1ST = 193,
  /**	KIPO-KAIST Core-A 2nd generation processor family */
  EM_COREA_2ND = 194,
  /**	Synopsys ARCompact V2 */
  EM_ARC_COMPACT2 = 195,
  /**	Open8 8-bit RISC soft processor core */
  EM_OPEN8 = 196,
  /**	Renesas RL78 family */
  EM_RL78 = 197,
  /**	Broadcom VideoCore V processor */
  EM_VIDEOCORE5 = 198,
  /**	Renesas 78KOR family */
  EM_78KOR = 199,
  /**	Freescale 56800EX Digital Signal Controller (DSC) */
  EM_56800EX = 200,
  /**	Beyond BA1 CPU architecture */
  EM_BA1 = 201,
  /**	Beyond BA2 CPU architecture */
  EM_BA2 = 202,
  /**	XMOS xCORE processor family */
  EM_XCORE = 203,
  /**	Microchip 8-bit PIC(r) family */
  EM_MCHP_PIC = 204,
  /**	Reserved by Intel */
  EM_INTEL205 = 205,
  /**	Reserved by Intel */
  EM_INTEL206 = 206,
  /**	Reserved by Intel */
  EM_INTEL207 = 207,
  /**	Reserved by Intel */
  EM_INTEL208 = 208,
  /**	Reserved by Intel */
  EM_INTEL209 = 209,
  /**	KM211 KM32 32-bit processor */
  EM_KM32 = 210,
  /**	KM211 KMX32 32-bit processor */
  EM_KMX32 = 211,
  /**	KM211 KMX16 16-bit processor */
  EM_KMX16 = 212,
  /**	KM211 KMX8 8-bit processor */
  EM_KMX8 = 213,
  /**	KM211 KVARC processor */
  EM_KVARC = 214,
  /**	Paneve CDP architecture family */
  EM_CDP = 215,
  /**	Cognitive Smart Memory Processor */
  EM_COGE = 216,
  /**	Bluechip Systems CoolEngine */
  EM_COOL = 217,
  /**	Nanoradio Optimized RISC */
  EM_NORC = 218,
  /**	CSR Kalimba architecture family */
  EM_CSR_KALIMBA = 219,
  /**	Zilog Z80 */
  EM_Z80 = 220,
  /**	Controls and Data Services VISIUMcore processor */
  EM_VISIUM = 221,
  /**	FTDI Chip FT32 high performance 32-bit RISC architecture */
  EM_FT32 = 222,
  /**	Moxie processor family */
  EM_MOXIE = 223,
  /**	AMD GPU architecture */
  EM_AMDGPU = 224,
  /**	RISC-V */
  EM_RISCV = 243,
}

export enum ProgramHeaderType {
  /**	Program header table entry unused */
  NULL = 0,
  /**	Loadable segment */
  LOAD = 1,
  /**	Dynamic linking information */
  DYNAMIC = 2,
  /**	Interpreter information */
  INTERP = 3,
  /**	Auxiliary information */
  NOTE = 4,
  /**	Reserved */
  SHLIB = 5,
  /**	Segment containing program header table itself */
  PHDR = 6,
  /**	Thread-Local Storage template */
  TLS = 7,
}

export enum SectionHeaderType {
  /**	Section header table entry unused */
  NULL = 0x0,
  /**	Program data */
  PROGBITS = 0x1,
  /**	Symbol table */
  SYMTAB = 0x2,
  /**	String table */
  STRTAB = 0x3,
  /**	Relocation entries with addends */
  RELA = 0x4,
  /**	Symbol hash table */
  HASH = 0x5,
  /**	Dynamic linking information */
  DYNAMIC = 0x6,
  /**	Notes */
  NOTE = 0x7,
  /**	Program space with no data (bss) */
  NOBITS = 0x8,
  /**	Relocation entries, no addends */
  REL = 0x9,
  /**	Reserved */
  SHLIB = 0x0a,
  /**	Dynamic linker symbol table */
  DYNSYM = 0x0b,
  /**	Array of constructors */
  INIT_ARRAY = 0x0e,
  /**	Array of destructors */
  FINI_ARRAY = 0x0f,
  /**	Array of pre-constructors */
  PREINIT_ARRAY = 0x10,
  /**	Section group */
  GROUP = 0x11,
  /**	Extended section indices */
  SYMTAB_SHNDX = 0x12,
}

export enum SectionHeaderFlag {
  /** Writable */
  WRITE = 0x1,
  /** Occupies memory during execution */
  ALLOC = 0x2,
  /** Executable */
  EXECINSTR = 0x4,
  /** Might be merged */
  MERGE = 0x10,
  /** Contains null-terminated strings */
  STRINGS = 0x20,
  /** sh_info' contains SHT index */
  INFO_LINK = 0x40,
  /** Preserve order after combining */
  LINK_ORDER = 0x80,
  /** Non-standard OS specific handling required */
  OS_NONCONFORMING = 0x100,
  /** Section is member of a group */
  GROUP = 0x200,
  /** Section hold thread-local data */
  TLS = 0x400,
}
