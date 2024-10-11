const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(":");
let [h, m] = input;
console.log("%d:%d", (+h)+1, +m);