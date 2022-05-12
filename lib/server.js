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

const server = app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});

module.exports = {
    app,
    server
};