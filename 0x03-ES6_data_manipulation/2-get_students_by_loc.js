export default function getStudentIdsSum(students, city) {
  const locations = students.filter((student) => student.location === city);
  return locations;
}
