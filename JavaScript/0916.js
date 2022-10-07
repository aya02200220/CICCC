//下記のように一行で書く場合はture or false で返る
let i = 10;
console.log(i % 2 === 0); // true or false

//変数の型を確認　”i” には変数でもそのまま値を入れてもOK
console.log(typeof i);

//イニシャライズされているかどうかの確認。 undefinedは「””」あってもなくてもOK
console.log(typeof i == "undefined"); // true or false

let name = "ishimura";
console.log(name[0].toUpperCase());
