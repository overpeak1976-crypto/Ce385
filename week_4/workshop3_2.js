function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = "Data from callback";
        callback(data);
    }, 2000);
}

fetchDataWithCallback((result) => {
    console.log("Callback result:", result);
});

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data from promise";
            resolve(data);
        },2000);
    });
}

fetchDataWithPromise()
    .then((result) => {
        console.log("Promise result:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
