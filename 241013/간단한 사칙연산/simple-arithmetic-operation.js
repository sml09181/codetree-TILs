const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let [a, b] = input;
a = +a, b = +b;
console.log(`%d
%d
%d
%d`, a+b, a-b, parseInt(a/b), a%b);