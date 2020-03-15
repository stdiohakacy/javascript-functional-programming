// closures
let me = 'abc'
function greetMe() {
    console.log(`Hello ${me}`);
}
me = 'cba';

greetMe();
