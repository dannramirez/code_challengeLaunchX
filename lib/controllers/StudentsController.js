const StudentService = require("./../services/studentService");
const Reader = require("./../util/Reader");


class StudentController {
    static getStudents() {
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentService.getStudents(students);
    }

    static getStudentsEmailsWithCertification() {
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentService.getStudentsEmailsWithCertification(students);
    }
}

module.exports = StudentController;