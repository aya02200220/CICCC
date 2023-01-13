/*
Write a recursive function called 'isPalindrome' which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.*/

function isPalindrome(str) {
  if (str.length < 2) return true;
  return str[0] === str[str.length - 1]
    ? isPalindrome(str.slice(1, str.length - 1))
    : false;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
