const StudentService = require("./../services/StudentService");
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

    static getStudentsHigherCredits(credits) {
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentService.getStudentsHigherCredits(students,credits);
    }

}

module.exports = StudentController;