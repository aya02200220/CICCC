/*
Write a function that takes as input an array and calculates the sum of its elements. Your function should also handle negative values.
*/
let input1 = [3, 11, 7, 2, 9, 10]; //42
let input2 = [-1, 110, 1, 1, 0]; //111

function sumArray(values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
}
console.log(sumArray(input1));
console.log(sumArray(input2));

// in recursive way
console.log("=========== recursion ===========");
const sumArray2 = (arr) => {
  if (arr.length <= 0) {
    return 0;
  } else {
    return arr.pop() + sumArray2(arr);
  }
};
console.log(sumArray2(input1));
console.log(sumArray2(input2));
