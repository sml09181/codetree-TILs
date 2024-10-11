const fs = require("fs");
let a = Number(fs.readFileSync(0).toString());
console.log(2*a+3);