/**
 * Returns an array of student IDs from a list of student objects.
 * If the input is not an array, returns an empty array.
 * 
 * @param {Array} arr - Array of student objects.
 * @returns {Array} Array of student IDs.
 */
function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(student => student.id);
}

export default getListStudentIds;

