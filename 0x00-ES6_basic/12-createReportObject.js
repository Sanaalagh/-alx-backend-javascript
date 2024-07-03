/**
 * Task 12: Let's create a report object
 * Write a function named createReportObject
 * 
 * Exported Function:
 *  - createReportObject: returns a report object with methods
 */

export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
