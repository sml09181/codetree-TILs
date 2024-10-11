const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input;
console.log(`${(+a).toFixed(3)}
${(+b).toFixed(3)}
${(+b).toFixed(3)}`);