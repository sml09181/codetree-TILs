const fs = require("fs");
let ft = 30.48;
let n = Number(fs.readFileSync(0).toString());
console.log((n*ft).toFixed(1));