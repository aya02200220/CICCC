function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle); //配列の0番目からmiddle番目の一つ前までのitemを抜き出す。
  const right = arr.slice(middle); //配列のmiddle番目以降のitemを抜き出す。
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([6, 3, 6, 84, 88, 45, 3, 1]));
