/*
A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers. Count the number of prime numbers less than a non-negative number, n */

const isPrime = function (num) {
  if (num <= 1) return 0;
  let i = 2;
  while (i < num) {
    if (num % i === 0) return 0;
    i++;
  }
  return 1;
};

const countPrime = function (num) {
  if (num <= 0) return 0;

  let count = 0;
  for (i = num; i > 1; i--) {
    count += isPrime(i);
  }
  return count;
};

console.log(countPrime(100));
