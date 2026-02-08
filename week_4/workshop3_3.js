function simulateAsyncOperation(timeout) {
    return new Promise((resolve, reject) => {
        if (timeout < 1000) {
            reject('Error: Timeout must be at least 1000 ms');
            return;
        }

        setTimeout(() => {
            resolve(`Operation completed in ${timeout} ms`);
        }, timeout);
    });
}

async function performAsyncTask(timeout) {
    try {
        const result = await simulateAsyncOperation(timeout);
        console.log('Success:', result);
    } catch (error) {
        console.log('Caught error:', error);
    }
}

performAsyncTask(1500); 
performAsyncTask(500);  
