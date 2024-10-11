const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".");
let [y, m, d] = input;
console.log("%d-%d-%d", m, d, y);