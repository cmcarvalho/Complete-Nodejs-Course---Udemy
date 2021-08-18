// console.log("Test");

const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was created by Node.js!");

fs.appendFileSync(
  "notes.txt",
  " This is the data to be attached to the notes!"
);
