export default function getListStudentIds(studentId) {
  if (Array.isArray(studentId)) {
    return studentId.map((student) => student.id);
  }
  return [];
}
