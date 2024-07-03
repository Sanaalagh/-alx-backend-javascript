/**
 * Task 11: Iterator
 * Write a function named createEmployeesObject
 * 
 * Exported Function:
 *  - createEmployeesObject: returns an object with department name and employees
 */

export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
