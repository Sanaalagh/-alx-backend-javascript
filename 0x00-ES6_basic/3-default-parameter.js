/**
 * Task 3: Parameter defaults
 * Condense the function using default parameter values
 * 
 * Exported Function:
 *  - getSumOfHoods: returns the sum of the parameters
 */

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
