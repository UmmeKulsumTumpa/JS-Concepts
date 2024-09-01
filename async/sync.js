const processOrder = (customer) => {
    console.log(`Order is processing for customer 1`);

    let currentTime = new Date().getTime();
    while(currentTime+3000 >= new Date().getTime());

    console.log(`Done processing`);
}

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);

