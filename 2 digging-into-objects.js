// Challenge: return the number 123 using only one line of code
// Code provided:

var myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark"
};

// Solution to return "123"

myCrazyObject["some array"][2]["number"];

// Alternate solution using dot notation:
// myCrazyObject["some array"][2].number;
