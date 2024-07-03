/**
 * Task 14: Iterate through object
 * Write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.
 * It should return every employee name in a string, separated by |
 * 
 * Exported Function:
 *  - iterateThroughObject: returns a string of employee names separated by '|'
 */

export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  // Remove the last ' | ' from the result string
  return result.slice(0, -3);
}
