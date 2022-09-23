// If 構文
function pow2(number, power) {
  let temp = 1;
  for (let x = 0; x < power; x++) {
    temp *= number;
  }
  return temp;
}
console.log(pow2(2, 3));

// Recursive 構文
function pow(number, power) {
  if (power == 1) {
    return number;
  } else {
    return number * pow(number, power - 1);
  }
}
console.log(pow(2, 3));
