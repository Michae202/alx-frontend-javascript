export default function updateStudentGradeByCity(students, city, newGrades) {
  const locations = students.filter((student) => student.location === city);
  const newArray = locations.map((student) => {
    const gradeCheck = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeCheck) {
      return {
        ...student,
        grade: gradeCheck.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',

    };
  });
  return newArray;
}
