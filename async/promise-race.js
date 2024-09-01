const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 resolved`);
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 3000);
});

// a race occurs among promises
// the quickest resolved promise wins!
Promise.race([promise1, promise2])
    .then((res) => {
        console.log(res);
        
    });
