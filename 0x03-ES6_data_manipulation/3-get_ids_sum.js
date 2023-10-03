export default function getStudentIdsSum(studentId) {
  if (Array.isArray(studentId)) {
    const list = studentId.map((student) => student.id);
    const add = list.reduce((accumulator, currentValue) => accumulator + currentValue);
    return add;
  }
  return 0;
}
