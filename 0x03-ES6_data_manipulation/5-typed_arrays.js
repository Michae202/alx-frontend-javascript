export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(10);
  const dataView = new DataView(buffer);
  const int8Array = new Int8Array(buffer);

  if (position >= 0 && position < int8Array.length) {
    int8Array[position] = value;
  } else {
    throw new Error('Position outside range');
  }
  return dataView;
}
