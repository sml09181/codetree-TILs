const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input;
console.log(`${+a} ${+b} ${+c}`);