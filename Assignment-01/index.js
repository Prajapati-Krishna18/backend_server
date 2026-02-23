const express = require("express");
const app = express();
app.use(express.json());

const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 8,
        cgpa: 9.3,
        averageCGPA: 7.12
    },
    {
        id: 2,
        name: "Ishita Verma",
        branch: "IT",
        semester: 7,
        cgpa: 8.9,
        averageCGPA: 8.12
    },
    {
        id: 3,
        name: "Rohan Kulkarni",
        branch: "ECE",
        semester: 6,
        cgpa: 8.4,
        averageCGPA: 6.25
    },
    {
        id: 4,
        name: "Meera Iyer",
        branch: "CSE",
        semester: 8,
        cgpa: 9.1,
        averageCGPA: 6.89
    },
    {
        id: 5,
        name: "Kunal Deshmukh",
        branch: "IT",
        semester: 5,
        cgpa: 7.8,
        averageCGPA: 5.29
    },
    {
        id: 6,
        name: "Ananya Reddy",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7,
        averageCGPA: 2.56
    },
    {
        id: 7,
        name: "Vikram Patil",
        branch: "ECE",
        semester: 7,
        cgpa: 8.2,
        averageCGPA: 7.65
    },
    {
        id: 8,
        name: "Priyanka Nair",
        branch: "AI",
        semester: 4,
        cgpa: 8.8,
        averageCGPA: 3.65
    },
    {
        id: 9,
        name: "Harsh Mehta",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0,
        averageCGPA: 6.24
    },
    {
        id: 10,
        name: "Neha Gupta",
        branch: "ECE",
        semester: 6,
        cgpa: 7.9,
        averageCGPA: 8.69
    }
];

app.get("/", (req, res) => {
    res.send("Assignment-01");
});

app.get("/students", (req, res) => {
    res.status(200).json(students);
})

app.get("/students/topper", (req, res) => {
    if (!students) {
        res.status(404).json(students);
    }
    const topper = students.reduce((max, student) => {
        return student.cgpa > max.cgpa ? student : max
    })
    res.status(200).json(topper);
});

app.get("/students/average", (req, res) => {

    if (!students) {
        return res.status(404).json({ message: "User not found" });
    }

    const average = students.map(student => ({
        ID: student.id,
        NAME: student.name,
        BRANCH: student.branch,
        AVERAGECGPA: student.averageCGPA
    }))
    res.status(200).json(average);
});

app.get("/students/count", (req, res) => {
    if (!students) {
        res.status(404).json({ message: "Student Not Found" })
    }

    const student = students.length;

    res.status(200).json(student);
});

app.get("/students/:id", (req, res) => {
    const studentId = Number(req.params.id);
    console.log(studentId);
    const student = students.find(u => u.id === studentId);
    console.log(student);

    if (!student) {
        res.status(404).json({ message: "Student Not Found" })
    }

    res.status(200).json(student);
});

app.get("/students/branch/:branchName", (req, res) => {

    const studentBranch = req.params.branchName.toLowerCase();
    console.log(studentBranch);
    const student = students.filter(u => u.branch.toLowerCase() === studentBranch);
    console.log(student);

    if (student.length === 0) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    res.status(200).json(student);
});

app.listen(5001, () => {
    console.log("Server started on port 5001");
});