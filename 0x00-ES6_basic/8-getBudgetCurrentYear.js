/**
 * Task 8: No need to create empty objects before adding in properties
 * Use ES6 computed property names on the budget object
 * 
 * Exported Function:
 *  - getBudgetForCurrentYear: returns a budget object with computed property names
 */

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
