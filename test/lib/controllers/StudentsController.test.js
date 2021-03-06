const StudentController = require("../../../lib/controllers/StudentsController");

describe("Test for Stutends Controllers", () => {

    test("Test to get Students", () => {
        const result = StudentController.getStudents();
        expect(result[0]).toStrictEqual({
            "credits": 508,
            "email": "Todd@visualpartnership.xyz",
            "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Avanzado"],
            "haveCertification": true,
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "previousCourses": 1
        });

        expect(result[result.length - 1]).toStrictEqual({
            "credits": 227,
            "email": "Hays@visualpartnership.xyz",
            "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Básico"],
            "haveCertification": true,
            "id": "6264d5d82eb0f4917bd0d332",
            "name": "Clare",
            "previousCourses": 2
        });
    });

    test("Test to get Emails of certified students", () => {
        const result = StudentController.getStudentsEmailsWithCertification();
        expect(result[0]).toBe("Todd@visualpartnership.xyz");
        expect(result[result.length - 1]).toBe("Hays@visualpartnership.xyz");
    });

    test(" Test to get Students with scores higher than sent (500)", () => {
        const result = StudentController.getStudentsHigherCredits(500);
        expect(result[0]).toStrictEqual({
            "credits": 508,
            "email": "Todd@visualpartnership.xyz",
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado",
            ],
            "haveCertification": true,
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "previousCourses": 1,
        });

        expect(result[result.length - 1]).toStrictEqual({
            "credits": 552,
            "email": "Shields@visualpartnership.xyz",
            "enrollments": [
                "Visual Thinking Avanzado",
                "Visual Thinking Intermedio",
            ],
            "haveCertification": true,
            "id": "6264d5d8e384c8da8ea5c16b",
            "name": "Ware",
            "previousCourses": 4,
        });
    });

});