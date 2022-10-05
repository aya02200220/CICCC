const arr = [2, 4, 12, 56, 7, 67, 1, 34, 5, 87];

// 昇順でソート
console.log(arr.sort((a, b) => a - b));
// 降順でソート
console.log(arr.sort((a, b) => b - a));

// Bubble Sort ==============================================
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

// An optimized version of Bubble Sort

function bubbleSort(arr, n) {
  var i, j;

  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

// - Output -

// Sorted array:
// 1 2 4 5 8

// Time Complexity: O(N2)
// Auxiliary Space: O(1)

// Selection sort ==============================================
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}
numArr = [56, 12, 90, 13, 78, 53, 91, 39, 3, 5, 12];
console.log("=========== selection sort ============");
console.log(selectionSort(numArr));
// - Output -
// Sorted array:
// 11 12 22 25 64

// f= arr.sort()

// Insertion search ==============================================
function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// - Output -
// 5 6 11 12 13

// Time Complexity: O(N^2)
// Auxiliary Space: O(1)
