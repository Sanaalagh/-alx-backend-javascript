/**
 * Task 9: ES6 method properties
 * Rewrite getFullBudgetObject to use ES6 method properties
 * 
 * Exported Function:
 *  - getFullBudgetObject: returns a full budget object with methods
 */

import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
