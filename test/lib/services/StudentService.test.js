const Reader = require("./../../../lib/util/Reader");
const StudentService = require("./../../../lib/services/StudentService");
const students = Reader.readJsonFile("./test/lib/services/student_test.json");

describe("Test for ExplorerService", () => {
    test("Get all Students", () => {
        const listStudents = StudentService.getStudents(students);
        expect(listStudents).toStrictEqual([{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": true
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 210,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": true
        },
        {
            "id": "6264d5d8878a117a9c57c5c4",
            "name": "Claudia",
            "email": "Howell@visualpartnership.xyz",
            "credits": 227,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 5,
            "haveCertification": true
        },
        {
            "id": "6264d5d8dd1a0be4e249c662",
            "name": "Phillips",
            "email": "Camacho@visualpartnership.xyz",
            "credits": 973,
            "enrollments": [
                "Visual Thinking Intermedio"
            ],
            "previousCourses": 8,
            "haveCertification": false
        }
        ]);
    });

    test("Get email list of students with certification", () => {
        const emailStudentsCertificated = StudentService.getStudentsEmailsWithCertification(students);
        expect(emailStudentsCertificated).toStrictEqual(["Todd@visualpartnership.xyz", "Sexton@visualpartnership.xyz", "Sharlene@visualpartnership.xyz", "Howell@visualpartnership.xyz"]);
    });

    test("Get Students with Higher credits than 500", () => {
        const studentsHigherCredits = StudentService.getStudentsHigherCredits(students, 500);
        expect(studentsHigherCredits).toStrictEqual([{
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            previousCourses: 1,
            haveCertification: true
        },
        {
            id: "6264d5d85cf81c496446b67f",
            name: "Lucinda",
            email: "Sexton@visualpartnership.xyz",
            credits: 677,
            enrollments: ["Visual Thinking Avanzado"],
            previousCourses: 6,
            haveCertification: true
        },
        {
            id: "6264d5d8dd1a0be4e249c662",
            name: "Phillips",
            email: "Camacho@visualpartnership.xyz",
            credits: 973,
            enrollments: ["Visual Thinking Intermedio"],
            previousCourses: 8,
            haveCertification: false
        }
        ]);
    });

});