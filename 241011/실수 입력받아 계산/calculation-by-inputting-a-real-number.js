const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b] = input;
console.log(((+a)+(+b)).toFixed(2));