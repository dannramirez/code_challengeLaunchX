const supertest = require("supertest");
const {
    app,
    server
} = require("./../../lib/server");
const request = supertest(app);

afterAll(() => {
    server.close();
});

describe("Test endpoint responses", () => {

    test("Test the / endpoint", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "message": "Students API -- Code Challenge"
        });
    });

    test("Gets all students with /v1/students endpoint", async () => {
        const response = await request.get("/v1/students");
        expect(response.status).toBe(200);
        expect(response.body[0]).toStrictEqual({
            "credits": 508,
            "email": "Todd@visualpartnership.xyz",
            "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Avanzado"],
            "haveCertification": true,
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "previousCourses": 1
        });

        expect(response.body[response.body.length - 1]).toStrictEqual({
            "credits": 227,
            "email": "Hays@visualpartnership.xyz",
            "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Básico"],
            "haveCertification": true,
            "id": "6264d5d82eb0f4917bd0d332",
            "name": "Clare",
            "previousCourses": 2
        });
    });

    test("Gets a list of emails from certified students /v1/students/certificated endpoint", async () => {
        const response = await request.get("/v1/students/certificated");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([
            "Todd@visualpartnership.xyz",
            "Sexton@visualpartnership.xyz",
            "Sharlene@visualpartnership.xyz",
            "Howell@visualpartnership.xyz",
            "Haynes@visualpartnership.xyz",
            "Montoya@visualpartnership.xyz",
            "Benton@visualpartnership.xyz",
            "Dionne@visualpartnership.xyz",
            "Mcpherson@visualpartnership.xyz",
            "Gracie@visualpartnership.xyz",
            "Ila@visualpartnership.xyz",
            "Dorthy@visualpartnership.xyz",
            "Mcfarland@visualpartnership.xyz",
            "Maryann@visualpartnership.xyz",
            "Alana@visualpartnership.xyz",
            "Rosemary@visualpartnership.xyz",
            "Keith@visualpartnership.xyz",
            "Delaney@visualpartnership.xyz",
            "Ball@visualpartnership.xyz",
            "Sally@visualpartnership.xyz",
            "Antoinette@visualpartnership.xyz",
            "Juliette@visualpartnership.xyz",
            "Harding@visualpartnership.xyz",
            "Dixon@visualpartnership.xyz",
            "Beulah@visualpartnership.xyz",
            "Moses@visualpartnership.xyz",
            "Shields@visualpartnership.xyz",
            "Jewell@visualpartnership.xyz",
            "Hays@visualpartnership.xyz",
        ]);
    });

});