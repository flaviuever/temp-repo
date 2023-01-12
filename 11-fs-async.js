const fs = require("fs");
const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return;

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) return;
    const second = result;
    writeFile(
      "./content/third-result.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) return;
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
