/**
 * Task 10: For...of Loops
 * Rewrite the function to use ES6’s for...of operator
 * 
 * Exported Function:
 *  - appendToEachArrayValue: appends a string to each array element
 */

export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    array[array.indexOf(value)] = `${appendString}${value}`;
  }
  return array;
}
