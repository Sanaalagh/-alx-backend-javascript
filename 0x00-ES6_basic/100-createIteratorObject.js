/**
 * Task 13: Iterating through report objects
 * Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.
 * This function will return an iterator to go through every employee in every department.
 * 
 * Exported Function:
 *  - createIteratorObject: returns an iterator for all employees in the report object
 */

export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department of Object.keys(report.allEmployees)) {
    allEmployees = allEmployees.concat(report.allEmployees[department]);
  }

  return allEmployees[Symbol.iterator]();
}
