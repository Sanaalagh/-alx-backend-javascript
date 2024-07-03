/**
 * Task 5: The wonders of spread syntax
 * Using spread syntax, concatenate 2 arrays and each character of a string
 * 
 * Exported Function:
 *  - concatArrays: returns the concatenated array
 */

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
