const newArr = [1, 3, 4, 6, 9, 13, 56, 91, 100, 154];
// 答えが見つかったらループ終了
const findNum = function (arr, target) {
  let left = 0;
  let right = newArr.length - 1;
  let middle = Math.trunc(right / 2);

  let ans = "";
  while (left <= right) {
    if (newArr[left] === target) return (ans = left);
    if (newArr[right] === target) return (and = right);
    if (newArr[middle] === target) return (ans = middle);

    if (target < newArr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    if (left === right) break;
    middle = Math.trunc((right + left) / 2);
  }
  return ans !== "" ? ans : -1;
};
console.log(findNum(newArr, 1));

// ミドルが答えになるまで処理を続ける(クビちゃんの答え)
console.log("===========================");
const arr = [1, 3, 4, 6, 9, 13, 56, 91, 100, 154];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 6));
