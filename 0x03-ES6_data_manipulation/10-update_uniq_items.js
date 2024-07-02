/**
 * Returns an updated map for all items with initial quantity of 1, changing their quantity to 100.
 * Throws an error if the argument is not a map.
 * 
 * @param {Map} map - Map of items with their quantities.
 * @returns {Map} Updated map with quantities changed to 100 where initial quantity was 1.
 * @throws {Error} If the argument is not a map.
 */
function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of map.entries()) {
    if (value === 1) map.set(key, 100);
  }
  return map;
}

export default updateUniqueItems;

