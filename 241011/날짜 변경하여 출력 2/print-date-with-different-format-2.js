const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let [m,d,y] = input;
console.log("%d-%d-%d", y, m, d);