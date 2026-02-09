const express = require('express')
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello Experess')
// });

// app.listen(3000, () => {
//     console.log('Server runing on http://localhost:3000');
// });

// app.get('/', (req, res, next) => {
//     const err = new Error('Something went wrong!');
//     next(err);
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Internal Server Error!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// app.use(express.json());

// app.use(express.urlencoded({extended: true }));

// app.post('/data', (req,res) => {
//     console.log(req.body);
//     res.send('Data received');
// });

// const validateStudent = (req, res, next) => {
//     const { name, age } = req.query;
//     if(!name || !age){
//         return res.status(400).send('Invalid date');
//     }
//     next();
// }

// app.get('/search', validateStudent, (req,res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     res.send(`Searching for name: ${name}, age: ${age}`);
// });


const students = [
    {id:1, name: "Nantawat"},
    {id:2, name: "Kew"}
]
app.get('/api/students', (req,res) => {
    res.send(students)
})

app.get('/api/students/:id', (req, res) => {
    //แปลงค่าพารามิเตอร์ id ให้เป็นตัวเลข
    const id = parseInt(req.params.id);
    //ค้นหานักเรียนตาม id
    const student = students.find(s => s.id === id);
    //ถ้าเจอนักเรียนจะส่งข้อมูลกลับ ถ้าไม่เจอจะส่ง error message
    if (student) {
        res.send(student);
    }
    else {
        res.status(404).send("Error 404: Student not found");
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

