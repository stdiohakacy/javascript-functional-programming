const orders = [
    {
        price: 250,
    },
    {
        price: 400,
    },
    {
        price: 100,
    },
    {
        price: 350,
    }
]

// let total = 0;
// for (let i = 0; i < orders.length; i++) {
//     total += orders[i].price;
// }
// console.log(total);

const total = orders.reduce(function(total, order) {
    return total + order.price;
}, 0)

console.log(total);
