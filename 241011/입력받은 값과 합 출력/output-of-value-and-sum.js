const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input;
console.log("%d %d %d", a, b, (+a)+(+b));