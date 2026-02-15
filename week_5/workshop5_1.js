const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "node", age: 18 },
    { id: 2, name: "express", age: 19 },
    { id: 3, name: "javascript", age: 20 }
];

function validateStudent(req, res, next) {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: "Invalid data" });
    }

    next();
}

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

app.post('/api/students', validateStudent, (req, res) => {

    const { name, age } = req.body;

    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name,
        age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

app.put('/api/students/:id', validateStudent, (req, res) => {

    const id = parseInt(req.params.id);
    const { name, age } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = name;
    student.age = age;

    res.json(student);
});

app.delete('/api/students/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1);

    res.json(deletedStudent[0]);
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
