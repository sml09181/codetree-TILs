const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [s, t] = input;
console.log(t, '\n', s);