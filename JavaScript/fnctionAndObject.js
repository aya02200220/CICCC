var count = 0;

function increaseFunction(value) {
  let total = count + value;
  //   console.log(total);
}

function greetings(name) {
  let text = "Hello " + name;
  return text;
}

let greetingAlex = greetings("Alex");
let greetingMustafa = greetings("Mustafa");
let greetingJoe = greetings("Joe");

// console.log(greetingAlex);
// console.log(greetingMustafa);
// console.log(greetingJoe);
// console.log(greetings("Jane"));
// greetings("Alex");
// greetings("Mari");
// increaseFunction(5);
// increaseFunction(10);
// increaseFunction(20);

// Parameters are variable
//
// let width = 50;
var wallWidth = 5;
var wallHeight = 10;

function getArea(width = 20, height = 4) {
  return width * height + count;
}

// console.log("========");
let area1 = getArea(2, 10); // 20
// console.log(area1);
// console.log("========");
let area2 = getArea(102, 39); // 3978
// console.log(area2);
// console.log("========");
let area3 = getArea(); // 80
// console.log(area3);
// console.log("========");
let area4 = getArea(wallWidth, wallHeight);
// console.log(area4); // 50

function getSize(width, height, depth) {
  var area = width * height;
  // area will equal to width * height
  var volume = width * height * depth;
  // volume will equal to width * height * depth
  var sizes = [area, volume];
  return sizes;
}

let getOneArea = getSize(2, 10, 5)[0]; // [20, 100]
let getOneVolume = getSize(2, 10, 5)[1];
// console.log("===Area====");
// console.log(getOneArea);
// console.log("===Volume====");
// console.log(getOneVolume);

// console.log("===================");

function basicFunction() {
  return "Hello world!";
} // function declaration

let heyyo = function (name) {
  return "Hello " + name;
}; // function expression

// console.log(heyyo("Kubilay"));

var hotel = {
  name: "Vancouver Hotel",
  rooms: 24,
  booked: 14,
  gym: false,
  openPool: false,
  roomTypes: ["queen bed", "king bed", "double queen bed"],
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
  checkout: function (countOfPeople) {
    this.booked = this.booked - countOfPeople;
    return "Available rooms " + (this.rooms - this.booked);
  },
  checkin: function (countOfPeople) {
    this.booked = this.booked + countOfPeople;
    return "Available rooms " + (this.rooms - this.booked);
  },
  carLot: 50,
};

// console.log(this); //window

var torontoHotel = {
  rooms: [
    {
      type: "king size bed",
      kitchen: true,
      count: 10,
      booked: 5,
    },
    {
      type: "queen size bed",
      kitchen: false,
      count: 20,
      booked: 10,
    },
  ],
  name: "Toronto Hotel",
  gym: true,
  pool: true,
  carLot: 1000,
  checkAvailability: function (kitchen) {
    for (let i = 0; i < 2; i++) {
      if (this.rooms[i].kitchen == kitchen) {
        return (
          "Available " +
          (this.rooms[i].count - this.rooms[i].booked) +
          " rooms with kitchen: " +
          kitchen
        );
      }
    }
  },
};

// console.log(torontoHotel.checkAvailability(false));
// console.log(torontoHotel.name); // dot notation
// console.log(torontoHotel["name"]); // square bracket syntax

var ottawaHotel = new Object(); // constructor notation

ottawaHotel.name = "Ottawa Hotel";
ottawaHotel.rooms = 50;
ottawaHotel.rooms = 80; // reassing rooms property.
ottawaHotel["rooms"] = 90; // reassign rooms property.
ottawaHotel.booked = 20;
ottawaHotel.gym = true;
ottawaHotel.checkAvailability = function () {
  return ottawaHotel.rooms - ottawaHotel.booked;
};

// console.log(ottawaHotel);
// console.log(ottawaHotel.gym);
// delete ottawaHotel.gym; // to delete a property from object.
// console.log(ottawaHotel.gym);
// console.log(ottawaHotel);
// console.log(ottawaHotel.name);

// console.log(hotel);
// console.log(hotel.name); // Vancouver Hotel
// console.log(hotel.checkAvailability()); // 10
// console.log(hotel.checkin(4));
// console.log(hotel.checkout(10));

// filter for kitchen `true`

var width = 400;

var getWidth = function () {
  var width = 500;

  console.log(this.width + " width");
};

// getWidth();

// index/value pair
var arr = [0, 1, 2, 3];

// key/value pair
var obj = {
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
};

let hey = "kak dela";
// console.log(hey.length);
// console.log(hey.toUpperCase());
// console.log(hey.indexOf("e"));
// console.log(hey.substring(4, 8));

// console.log(hey.split(" ")[1]);
// console.log(hey.trim());
// console.log(hey.replace("kak", "hello"));
