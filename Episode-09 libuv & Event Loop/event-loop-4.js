const fs = require('fs');
setImmediate(() =>console.log("setImmediate"));

setTimeout(() =>console.log("Timer expired"));

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", () =>{ console.log("File Reading CB");
});

process.nextTick(() =>{
    process.nextTick(() => console.log(" inner nextTick"));
    console.log("nextTick");
});

console.log("Last line of the file.")

//output
// Last line of the file.
// nextTick
//  inner nextTick
// promise
// Timer expired
// setImmediate
// File Reading CB