const boxen = require("boxen");

const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default)
console.log(
  boxen(message, {
    title: title,
  })
);

// SingleDouble style
console.log(
  boxen(message, {
    title: title,
    borderStyle: "singleDouble",
  })
);

// Round style
console.log(
  boxen(message, {
    title: title,
    borderStyle: "round",
  })
);
