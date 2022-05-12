class StudentService {
    static getStudents(students) {
        return students;
    }

    static getStudentsEmailsWithCertification(students) {
        const studentsCertificated = students.filter((student) => {
            return student.haveCertification === true;
        });

        const listOfEmail = studentsCertificated.map((student) => {
            return student.email;
        });

        return listOfEmail;
    }

    static getStudentsHigherCredits(students, credits) {
        const studentHigherCredits = students.filter((student) => {
            return student.credits > credits;
        });
        return studentHigherCredits;
    }
}

module.exports = StudentService;