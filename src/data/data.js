const autoIncrementCustomers = () => {
    
    for(let i=1; i<20; i++){
        customers.push({
            id: i + 1,
            name: `Customer ${i + 1}`,
        })
    };

};

const customers = [
    {
        id: 1,
        name: "Customer 1",
    }
];

module.exports = { autoIncrementCustomers, customers }