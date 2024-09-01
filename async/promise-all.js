const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 3000);
});

// promises are resolved separately
promise1
    .then((res) => {
        console.log(res);
    });
promise2
    .then((res) => {
        console.log(res);
    });

// all the promises are resolved together
Promise.all([promise1, promise2])
    .then((res) => {
        console.log(res);
        
    });
