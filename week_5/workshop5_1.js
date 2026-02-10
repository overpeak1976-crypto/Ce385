const express = require('express');
const app = express();

app.use(express.json());

//Array
const students = [
    {id: 1, name: "node", age: 18},
    {id: 2, name: "express", age: 19},
    {id: 3, name: "javascript", age: 20}
];

//Get
app.get('/api/students', (req,res) => {
    res.send(students)
})
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    }
    else {
        res.status(404).send("Error 404: Student not found");
    }
});

//Post
app.post('/api/students', (req, res) => {
    let { name, age } = req.body;

    const newStudent = {id: students.length + 1, name: name, age: age};

    students.push(newStudent);
    
    res.status(201).json(newStudent)

});

//Put
app.put('/api/students/:id', (req, res) => {

});

//Delete
app.delete('/api/students/:id', (req, res) => {

})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})