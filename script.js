const calc = (() => {
    const add = (x,y) => x + y;
    const sub = (x,y) => x - y;
    const div = (x,y) => x / y;
    const mul = (x,y) => x * y;
    return {add, sub, div, mul};
})();

console.log(calc.add(3,4))
console.log(calc.sub(4,3))
console.log(calc.div(6,2))
console.log(calc.mul(2,2))