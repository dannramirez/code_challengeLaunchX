const Reader = require("./../../../lib/util/Reader");

describe("Test for Reader utils", () => {
    test("Test readJsonFile() method to read and get info from file ", () => {
        const explorers = Reader.readJsonFile("./test/lib/util/test.json");
        expect(explorers).toStrictEqual([{
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
        }
        ]);
    });
});