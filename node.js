const fs= require("fs");

const text= fs.readFileSync("tm.txt", "utf-8");
fs.replace("node", "mongo");

console.log(text);

fs.writeFileSync("abc.txt", text);