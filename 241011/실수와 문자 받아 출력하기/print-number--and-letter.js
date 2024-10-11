const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [c, a, b] = input;
console.log(`${c}\n${a.toFixed(2)}\n${b.toFixed(2)}`);