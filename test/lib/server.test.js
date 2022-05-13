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

});