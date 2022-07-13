export function hexByte(value: number) {
  return ((value >> 4) & 0xf).toString(16) + (value & 0xf).toString(16);
}

export function hex32(value: number) {
  return hexByte(value >> 24) + hexByte(value >> 16) + hexByte(value >> 8) + hexByte(value);
}

export function hexPrint(value: number) {
  return '0x' + hex32(value);
}
