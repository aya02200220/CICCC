//Arrayの使い方

//普通に配列に格納
let arr = ["one", "tow", "three", "four"];

//Arrayに２次元配列で要素を格納して表示
let objArr = [
  {
    name: "John",
    lastName: "Doe",
  },
  {
    name: "Jane",
    lastName: "Doe",
  },
];

for (let i = 0; i < objArr.length; i++) {
  console.log(objArr[i]);
  console.log(objArr[i].name);
  console.log(objArr[i].lastName);
}

//Duplicate array
let arr2 = [0, 1, 2, 3, 4];
let arrTemp = Array.from(arr2);

arr2[0] = 50;
arrTemp[1] = 100;
console.log(arr2); //[50,1,2,3,4]
console.log(arrTemp); //[0,100,2,3,4]
