const fs = require("fs");
let numbers = fs.readFileSync(0).toString().split(" ");
console.log((+numbers[0])+(+numbers[1]));