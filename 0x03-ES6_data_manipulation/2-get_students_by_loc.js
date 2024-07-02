/**
 * Returns an array of student objects who are located in a specific city.
 * 
 * @param {Array} arr - Array of student objects.
 * @param {string} city - City name to filter students by.
 * @returns {Array} Array of student objects located in the specified city.
 */
function getStudentsByLocation(arr, city) {
  return arr.filter(student => student.location === city);
}

export default getStudentsByLocation;

