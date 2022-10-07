/*
Write a function gets string value as parameter and returns a boolean value, if this string contain `gh` letter next to each other or not. */

const isContain = function (str) {
  return str.indexOf("gh") > 0;
};

console.log(isContain("Hey good night!")); // true
console.log(isContain("Hey good morning!")); // false
