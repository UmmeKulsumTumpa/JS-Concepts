const takeOrder = (customer) => {
    return new Promise((resolve) => {
        console.log(`take order for customer ${customer}`);
        resolve(customer);
    });
};

const processOrder = (customer) => {
    return new Promise((resolve) => {
        console.log(`Order is processing for customer ${customer}`);

        setTimeout(() => {
            console.log(`cooking completed for customer ${customer}`);
            console.log(`processing completed for customer ${customer}`);
            resolve(customer);
        }, 3000);
    })
};


const serveCustomer = (customer) => {
    return new Promise((resolve) => {
        console.log(`served order for customer ${customer}`);
        resolve();
    });
};

const completeOrder = (customer) => {
    takeOrder(customer)
        .then(processOrder)
        .then(serveCustomer)
        .catch((error) => {
            console.log(error);
        })
}

completeOrder(1);
console.log(`Non-blocking: showing that your code does not get blocked at process order`);
completeOrder(2);
