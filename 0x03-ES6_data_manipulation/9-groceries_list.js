/**
 * Returns a map of groceries with their respective quantities.
 * 
 * @returns {Map} Map of groceries with their quantities.
 */
function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  return groceries;
}

export default groceriesList;

