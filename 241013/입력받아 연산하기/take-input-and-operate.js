const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = Number(input[0])+87;
let b = Number(input[1])%10;
console.log("%d\n%d", a, b);