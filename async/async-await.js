const takeOrder = async (customer) => {
    console.log(`Taking order for customer ${customer}`);
};

const processOrder = async (customer) => {
    console.log(`Order is processing for customer ${customer}`);

    // Wrapping setTimeout in a Promise to await it correctly
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Cooking completed for customer ${customer}`);
            console.log(`Processing completed for customer ${customer}`);
            resolve();
        }, 3000);
    });
};

const serveCustomer = async (customer) => {
    console.log(`Served order for customer ${customer}`);
};

const completeOrder = async (customer) => {
    await takeOrder(customer);
    await processOrder(customer);
    await serveCustomer(customer);
};

// Start processing orders
completeOrder(1);
console.log(`Non-blocking: showing that your code does not get blocked at process order`);
completeOrder(2);
