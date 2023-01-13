###### Question 1: What's the output?

```js
function greeting() {
  console.log(name);
  console.log(age);
  var name = "Hana";
  let age = 21;
}

greeting();
// A: Hana and undefined
// B: Hana and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Ans: D: undefined and ReferenceError
// Short explanation: var can ce hoisting but its called before declaration. cant call let before declaration.
```

###### Question 2: What's the output?

```js
+true;
!"Lydia";

// A: 1 and false
// B: false and NaN
// C: false and false

// Ans:A: 1 and false
// Short explanation: "+" makes true as a number. "!"Lydia"" doesn't make sense at all so false.
```

###### Question 3: What's the output?

```js
function sum(a, b) {
  return a + b;
}

sum(1, "2");

// A: NaN
// B: TypeError
// C: "12"
// D: 3

// Ans:C: "12"
// Short explanation: 2 is string. it becomes same as "1" + "2".
```

###### Question 4: What's the output?

```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// Ans:C: 0 2 2
// Short explanation: With '++' increment, the result will be showed after the next line .
```

###### Question 5: What's the output?

```js
!!null;
!!"";
!!1;

// A: false true false
// B: false false true
// C: false true true
// D: true true false

// Ans:B: false false true
// Short explanation: !! is same as true condition.
```

###### Question 6: What's the output?

```js
console.log(3 + 4 + "5");

// A: "345"
// B: "75"
// C: 12
// D: "12"

// Ans: B: "75"
// Short explanation: its calculate left to right. when a value is string, it becomes string concatenation after the point.
```

###### Question 7: What's the value of num?

```js
const num = parseInt("7*6", 10);

// A: 42
// B: "42"
// C: 7
// D: NaN

// Ans:C: 7
// Short explanation:perseInt takes only first numbers.
```

###### Question 8:

Write a function indexOfIgnoreCase taking two strings
and determining the first occurrence of the second
string in the first string. The function should be
case insensitive.

Example: indexOfIgnoreCase('bit','it') and
indexOfIgnoreCase('bit','IT') should return 1.

```js
//Hint
const indexOfIgnoreCase = function (str1, str2) {
  console.log(str1.toUpperCase().indexOf(str2.toUpperCase()));
};
```

###### Question 9:

Write a function firstChar, which returns the
first character that is not a space when a string
is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.

```js
//Hint:
function firstChar(text) {
  return text.trim().charAt(0);
}
```

###### Question 10:

Write a function normalize, that replaces '-'
with '/' in a date string.

Example: normalize('20-05-2017') should return
'20/05/2017'.

```js
const normalize = (date) => {
  return date.replaceAll("-", "/");
};
```
