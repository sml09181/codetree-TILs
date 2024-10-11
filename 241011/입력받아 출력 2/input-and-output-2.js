const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let [f, d] = input;
console.log("%d%d", f, d);