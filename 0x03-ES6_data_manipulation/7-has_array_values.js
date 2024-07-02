/**
 * Returns a boolean if all the elements in the array exist within the set.
 * 
 * @param {Set} set - Set to check values against.
 * @param {Array} arr - Array of values to check.
 * @returns {boolean} True if all values in the array exist within the set, false otherwise.
 */
function hasValuesFromArray(set, arr) {
  return arr.every(value => set.has(value));
}

export default hasValuesFromArray;

