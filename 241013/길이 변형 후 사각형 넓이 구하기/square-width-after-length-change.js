const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input;
a = +a; b = +b;
a += 8; b *= 3;
console.log("%d\n%d\n%d", a, b, a*b);