/**
 * Returns a new ArrayBuffer with an Int8 value at a specific position.
 * Throws an error if the position is outside the range.
 * 
 * @param {Number} length - Length of the ArrayBuffer.
 * @param {Number} position - Position to add the Int8 value.
 * @param {Number} value - Int8 value to be added.
 * @returns {DataView} DataView of the created ArrayBuffer.
 * @throws {Error} If position is outside the range.
 */
function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position >= length) throw new Error('Position outside range');
  view.setInt8(position, value);
  return view;
}

export default createInt8TypedArray;

