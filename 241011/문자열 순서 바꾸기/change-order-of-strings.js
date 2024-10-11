const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [s, t] = input;
console.log("%s\n%s", t, s);