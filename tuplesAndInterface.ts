//Tuples

let ourtuple: [number, boolean, string];

ourtuple = [121, true, "Vishal"];

ourtuple.push("Something new Added");

console.log(ourtuple);

//Readonly Tuple

let readOnlyTuple: readonly [number, boolean, string] = [5, false, "Chetan"];

// readOnlyTuple.push("Hello");           it will give error

console.log(readOnlyTuple);

//Object Types

let car: { brand: string; model: string; year: number } = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2009,
};

console.log(car);

//Type Inference

let cars = {
  brand: "TATA",
};

cars.brand = "Ford";
// cars.brand = 25;             it will give error
console.log(cars);

let person: { name: string; mobno?: number } = {
  name: "Nikhil",
};

person.mobno = 8329223801;

console.log(person);
console.log(person.mobno);

//Interface

interface Rectangle {
  height: number;
  width: number;
}

let rectangle: Rectangle = {
  height: 20,
  width: 10,
};

console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);

// Again we can rewrite interface with new data

interface Person2 {
  name: string;
}

interface Person2 {
  age: number;
}

const per: Person2 = {
  name: "Alice",
  age: 30,
};

console.log(per);

//Extending Interfaces

interface Circle {
  radius: number;
}

interface Area extends Circle {
  area: number;
  color: string;
}

let area: Area = {
  radius: 10,
  area: 23.025,
  color: "red",
};

console.log(area);
console.log(area.radius);
console.log(area.area);
console.log(area.color);

//Union types

function printStatusCode(code: number | string) {
  console.log(`Status Code is ${code}`);
}

printStatusCode(404);
printStatusCode("200");
//printStatusCode(true);              argument of type 'boolean' is not assignable to parameter of type 'string | number'.

//Union Type Error

function printStatusCodes(code: string | number) {
  // console.log(`Status Code is ${code.toUpperCase}`);       it will give erroe
}

printStatusCodes(400);

// Union with Array

let data1: number[] = [1, 2, 3, 4, 5];
let data2: string[] = ["Banana", "Apple", "Mango"];
let data3: (string | number)[] = [1, "Vishal", 25];

console.log(data1);
console.log(data2);
console.log(data3);

// Casting

//1. using as keyword

let x: unknown = "Vishal";
console.log((x as string).length);

//2. using <>

let y: unknown = "Nikhil";
console.log((<string>y).length);

//3. force casting

let c = "Yamini";
console.log("Size of Yamini is :", (c as unknown as string).length);
