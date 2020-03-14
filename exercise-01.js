// function is value
// function Triple(x) {
//     return x * 3;
// }
// const triple = Triple(3);
// console.log(`triple ${triple}`);

// =========================================================

const triple = function(x) {
    return x * 3;
}

const data = triple;
const value = data(3);
console.log(`triple ${value}`);
