const fs = require("fs");
let a, b = Numbers(fs.readFileSync(0).toString().split(" "));
console.log("%d %d %d", a, b, a+b);