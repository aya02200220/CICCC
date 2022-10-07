/*
Write a function that takes in a string and returns a new string. The new string should be the same as the original with every duplicate character removed.
*/

function removeDupes(str) {
  const strArr = str.split("");
  let removedStr = "";

  for (let i = 0; i < strArr.length; i++) {
    if (removedStr.indexOf(strArr[i]) < 0) removedStr += strArr[i];
  }
  return removedStr;
}

console.log(removeDupes("abcd"));
console.log(removeDupes("aabbccdd"));
console.log(removeDupes("abcddbca"));
console.log(removeDupes("abababcdcdcd"));

// //in recursive way (未完)
// console.log("=========== recursion ===========");
// const removeDupes2 = function (str) {
//   if (str.length <= 0) {
//     return "";
//   } else {
//     const newArr = str.slice("");
//     newArr = newArr.indexOf(newArr.shift());
//   }
// };
// console.log(removeDupes2("abcd"));
// console.log(removeDupes2("aabbccdd"));
// console.log(removeDupes2("abcddbca"));
// console.log(removeDupes2("abababcdcdcd"));
