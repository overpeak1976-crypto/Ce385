//การใช้งานโมดูล 'http' ที่มีใน Node.js
const http = require('http');

//สร้าง server แบบง่ายๆ
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');
})

//กำหนด port และเริ่ม   server
server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
})


//1. require โมดูล express
const express = require('express');

//2.สร้าง instance ของ express
const app = express();

//3. กำหนด port ที่จะใช้รันเซิร์ฟเวอร์
const port = 3000;

//4.สร้างเส้นทาง (route) ที่ตอบกลับเมื่อมีการขอ GET มายังหน้าหลัก ('/')
app.get('/', (req, res) => {
    req.send('Hello, world');
})

//5. กำหนดให้เซิร์ฟเวอร์เริ่มฟังคำสั่ง
app.listen(port, () => {
    console.log(`Server is rinning http://locahost:${port}`);//ข้อความแจ้งว่า
})

//workshop3.1
const operation = require('./workshop3_1');
console.log(operation('add',4 ,5));
console.log(operation('subtract',10 ,3));
console.log(operation('multiply',5 ,6));
console.log(operation('divide',8 ,2));