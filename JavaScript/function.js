//下記のようにvalueを指定するとファンクションを呼んだときに空欄の場合は指定した数字が適用される。ファンクション呼ぶ際にvalueを指定したらそちらの数字が適用される
console.log("========== 一部数字指定 ============");
function getArea(width = 5, height = 10) {
  return width * height;
}
let area1 = getArea(2, 5);
console.log(area1); //10

let area2 = getArea();
console.log(area2); //50

console.log("========== Arrayで複数数字を返す ============");
//Arrayを使用したら複数の答えも返せる
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
var allSizes = getSize(3, 2, 3);
console.log(areaOne); //6
console.log(volumeOne); //18
console.log(allSizes); //[ 6, 18 ]

console.log("========== Global function ============");
//Conflictの可能性が高いのでLocal Functionの方が一般的に使われる。
let heyyo = function (name) {
  return "Hello " + name;
};
console.log(heyyo("Aya"));

console.log("========== Function in function ============");
var hotel = {
  name: "Holiday Inn",
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ["twin", "double", "suite"],
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
  checkout: function (countOfPeople) {
    this.rooms = this.rooms - countOfPeople;
    this.booked = this.booked = countOfPeople;
    return "Available rooms " + (this.rooms - this.booked);
  },
  checkin: function (countOfPeople) {
    this.rooms = this.rooms + countOfPeople;
    this.booked = this.booked = countOfPeople;
    return "Available rooms " + (this.rooms - this.booked);
  },
};
console.log(hotel);
console.log(hotel.name);
console.log(hotel.checkAvailability());
console.log(hotel.checkout(1));
console.log(hotel.checkin(1));
