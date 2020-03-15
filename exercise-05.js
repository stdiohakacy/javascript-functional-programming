const fs = require('fs');
const output = fs.readFileSync('data.txt', 'utf8').split('\n');
console.log(output);
