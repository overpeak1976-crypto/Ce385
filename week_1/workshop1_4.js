const username = 'Nantawat';
const password = '1234';
const age = 21

if (username == 'Nantawat' && password == '1234'  && age >=18) {
     console.log('เข้าสู่ระบบสำเร็จ')
} else if(username != 'Nantawat' || password != '1234'){
     console.log('ชื่อผู้ใช้หรือรหัสสผ่านไม่ถูกต้อง')
}
else if (age < 18) {
     console.log("อายุไม่ถึงเกณฑ์")
}