const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let [x, y] = input;
console.log("010-y-x", y, x);