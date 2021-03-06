const express = require("express");
const StudentController = require("./controllers/StudentsController");
const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({
        message: "Students API -- Code Challenge"
    });
});

app.get("/v1/students", (request, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/certificated", (request, response) => {
    const students = StudentController.getStudentsEmailsWithCertification();
    response.json(students);
});

app.get("/v1/students/score/:score", (request, response) => {
    const score = Number(request.params.score);
    if (isNaN(score)) {
        response.status(401).json({
            error: 401,
            message: `"${score}" input is not a number `,
        });
    }
    const students = StudentController.getStudentsHigherCredits(score);
    response.status(200).json({
        students: students
    });
});

const server = app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});

module.exports = {
    app,
    server
};