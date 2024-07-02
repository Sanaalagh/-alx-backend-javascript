/**
 * Returns a string of all the set values that start with a specific string (startString).
 * The returned string contains all the values of the set separated by '-'.
 * 
 * @param {Set} set - Set to filter values from.
 * @param {string} startString - Starting string to filter values.
 * @returns {string} String of filtered values separated by '-'.
 */
function cleanSet(set, startString) {
  const parts = [];
  set.forEach(value => {
    if (value.startsWith(startString)) {
      parts.push(value.slice(startString.length));
    }
  });
  return parts.join('-');
}

export default cleanSet;

