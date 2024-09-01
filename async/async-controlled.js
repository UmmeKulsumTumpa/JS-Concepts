const takeOrder = (customer, callback) => {
    console.log(`take order for customer ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`Order is processing for customer ${customer}`);

    setTimeout(() => {
        console.log(`cooking completed for customer ${customer}`);
        console.log(`processing completed for customer ${customer}`);
        callback(customer);
    }, 3000);
};

const serveCustomer = (customer) => {
    console.log(`served order for customer ${customer}`);
};

takeOrder(1, (customer) => {
    processOrder(customer, (customer) => {
        serveCustomer(customer);
    });
});

console.log(`showing that your code does not get blocked at process order`);

takeOrder(2, (customer) => {
    processOrder(customer, (customer) => {
        serveCustomer(customer);
    });
});
