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

});