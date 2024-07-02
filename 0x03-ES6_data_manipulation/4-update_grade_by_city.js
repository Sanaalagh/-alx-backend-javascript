/**
 * Returns an array of students for a specific city with their new grades.
 * If a student doesn’t have a grade in newGrades, the final grade should be 'N/A'.
 * 
 * @param {Array} students - Array of student objects.
 * @param {string} city - City name to filter students by.
 * @param {Array} newGrades - Array of grade objects with the format: { studentId: Number, grade: Number }.
 * @returns {Array} Array of student objects with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(student => student.location === city).map(student => {
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
    student.grade = gradeObj ? gradeObj.grade : 'N/A';
    return student;
  });
}

export default updateStudentGradeByCity;

