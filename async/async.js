const processOrder = (customer) => {
    console.log(`Order is processing for customer 1`);

    setTimeout(() => {
        console.log(`cooking completed`);
    }, 3000);

    console.log(`Done processing`);
}

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);

