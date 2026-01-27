const fs = require("fs");

function readFileData() {
  return new Promise((resolve, reject) => {
    fs.readFile("Data.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = readFileData;
