export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const gradeItem = newGrades.find((grade) => student.id === grade.studentId);
      return {
        ...student,
        grade: gradeItem ? gradeItem.grade : 'N/A',
      };
    });
}
