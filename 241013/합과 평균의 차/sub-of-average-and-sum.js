const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let sum = a+b+c, avg = sum/3;
console.log("%d\n%d\n%d", sum, avg, sum-avg);