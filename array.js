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
