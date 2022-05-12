const StudentService = require("./../services/studentService");
const Reader = require("./../util/Reader");


class StudentController {
    static getStudents() {
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentService.getStudents(students);
    }

}

module.exports = StudentController;