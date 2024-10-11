const fs = require("fs");
let input = Numbers(fs.readFileSync(0).toString().trim().split(" "));
const [a, b] = input;
console.log("%d %d %d", a, b, a+b);