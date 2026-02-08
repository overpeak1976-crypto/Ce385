function fetchDataFromServer1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from Server 1');
        }, 2000);
    });
}

function fetchDataFromServer2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error from Server 2'); 
        }, 1000);
    });
}


function fetchDataFromServer3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from Server 3');
        }, 3000);
    });
}

Promise.any([
    fetchDataFromServer1(),
    fetchDataFromServer2(),
    fetchDataFromServer3()
])
.then(result => {
    console.log('กรณีที่ 1: Server ที่สำเร็จตัวแรก');
    console.log(result);
})
.catch(error => {
    console.log('กรณีที่ 1: ทุก Server ล้มเหลว');
    console.log(error);
});


Promise.allSettled([
    fetchDataFromServer1(),
    fetchDataFromServer2(),
    fetchDataFromServer3()
])
.then(results => {
    console.log('\nกรณีที่ 2: ผลลัพธ์จากทุก Server');
    console.log(results);
});
