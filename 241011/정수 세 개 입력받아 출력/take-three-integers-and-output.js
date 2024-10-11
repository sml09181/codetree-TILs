const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let [temp, c] = input;
let [a, b] = temp.split(' ');
console.log(`${+a} ${+b} ${+c}`);