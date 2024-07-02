/**
 * Returns the sum of all student IDs.
 * 
 * @param {Array} arr - Array of student objects.
 * @returns {Number} Sum of student IDs.
 */
function getStudentIdsSum(arr) {
  return arr.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;

