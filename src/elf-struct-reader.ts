export class ELFStructReader {
  private offset = 0;
  private wordSize = 4;

  private readonly decoder = new TextDecoder();

  constructor(readonly buf: Uint8Array) {}

  readUint8() {
    return this.buf[this.offset++];
  }

  readUint16() {
    const { offset: index } = this;
    const low = this.buf[index];
    const high = this.buf[index + 1];
    this.offset += 2;
    return (high << 8) | low;
  }

  readUint32() {
    const { offset: index } = this;
    const lsb = this.buf[index];
    const mid1 = this.buf[index + 1];
    const mid2 = this.buf[index + 2];
    const msb = this.buf[index + 3];
    this.offset += 4;
    return ((msb << 24) | (mid2 << 16) | (mid1 << 8) | lsb) >>> 0;
  }

  readUint64() {
    return this.readUint32() + this.readUint32() * 2 ** 32;
  }

  readWord() {
    if (this.wordSize == 8) {
      return this.readUint64();
    } else {
      return this.readUint32();
    }
  }

  readBytes(count: number) {
    const buf = this.buf.subarray(this.offset, this.offset + count);
    this.offset += count;
    return buf;
  }

  readChars(count: number) {
    let buf = this.readBytes(count);
    const zeroIndex = buf.indexOf(0);
    if (zeroIndex >= 0) {
      buf = buf.subarray(0, zeroIndex);
    }
    return this.decoder.decode(buf);
  }

  readNullTerminated() {
    let endOffset = this.buf.indexOf(0, this.offset);
    if (endOffset < 0) {
      endOffset = this.buf.length;
    }
    const result = this.decoder.decode(this.buf.subarray(this.offset, endOffset));
    this.offset = endOffset;
    return result;
  }

  skip(count: number) {
    this.offset += count;
  }

  seek(offset: number) {
    const prevOffset = this.offset;
    this.offset = offset;
    return prevOffset;
  }

  get currentOffset() {
    return this.offset;
  }

  get word64Bit() {
    return this.wordSize === 8;
  }

  set word64Bit(value: boolean) {
    this.wordSize = value ? 8 : 4;
  }
}
