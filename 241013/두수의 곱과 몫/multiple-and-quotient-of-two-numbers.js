const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log("%d * %d = %d\n%d / %d = %d", a, b, a*b, a, b, parseInt(a/b));