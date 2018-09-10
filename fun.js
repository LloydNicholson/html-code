// Fun javascript test
console.log("Hello World");
console.log(200);
console.log(true);
console.log(null);
var num = 10;
console.log(num);

function makeCoffee(sugar, milk) {
  var instructions = "Boil water,";
  instructions += " pour into cup,";
  instructions += " add coffee granules,";
  instructions += " add " + sugar + " spoons of sugar,";
  instructions += " then add " + milk + "% milk.";

  return instructions;
}

// Send a log of the function to the console
console.log(makeCoffee(2, 20));

// Define arrays and objects within objects
var car = {
  make: "Volvo",
  speed: 160,
  drive: function() {return "drive";},
  engine: {
    size: 2.0,
    make: "BMW",
    fuel: "petrol",
    pistons: [ {maker: "BMW"} , {maker: "Audi"} ],
  }
};

// Define arrays
var shopping_list = [
  "Apple",
  "Orange",
  "Pear"
];

// Define arrays and objects within arrays
var array = [
  "string",
  100,
  ["embed", 200],
  {car: "ford"},
];
