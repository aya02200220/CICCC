const arr = [2, 4, 12, 56, 7, 67, 1, 34, 5, 87];

const target = 4;
console.log(arr.find((item) => item === target)); // 4

function findItem(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(findItem(arr, target));
