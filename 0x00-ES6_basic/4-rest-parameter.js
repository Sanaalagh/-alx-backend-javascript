/**
 * Task 4: Rest parameter syntax for functions
 * Modify the function to return the number of arguments passed using the rest parameter syntax
 * 
 * Exported Function:
 *  - returnHowManyArguments: returns the number of arguments
 */

export default function returnHowManyArguments(...args) {
  return args.length;
}
