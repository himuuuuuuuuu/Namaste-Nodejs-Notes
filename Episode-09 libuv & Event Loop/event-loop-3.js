const fs = require('fs');

setImmediate(() => console.log("set Immediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading CB");
})

process.nextTick(() => console.log("Process.nextTick"));

console.log("Last line of the file.")

//output
// Last line of the file.
// Process.nextTick
// Promise
// Timer expired
// set Immediate
// File Reading CB
// 2nd nextTick
// 2nd setImmediate
// 2nd timer