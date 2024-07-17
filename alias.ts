//Alias with primitive types

type Id = string;
type Age = number;

let userId: Id = "Vishal@123";
let userAge: Age = 21;

console.log(userId);
console.log(userAge);

//Object Types

type User = {
  id: string;
  age: number;
  city: string;
  isLogIn: boolean;
};

let user: User = {
  id: "Vishal123",
  age: 22,
  city: "Mumbai",
  isLogIn: true,
};

console.log(user);

//Alias 2

type Point = {
  x: number;
  y: number;
};

function printPoints(point: Point) {
  console.log("The coordinate x value is : ", point.x);
  console.log("The coordinate y value is : ", point.y);
}

printPoints({ x: 100, y: 200 });

//Union Types

type stringOrnumber = string | number;

let value: stringOrnumber = "Vishal";
console.log(value);

value = 42;
console.log(value);

//function type

type grretFunction = (name: string) => string;

let grret: grretFunction = (name) => `Hello ${name}!`;

console.log(grret("Vishal"));

//Array and Tuples

type stringArray = string[];
type numberTupple = [number, number, number];

let friend_names: stringArray = ["Vishal", "Chetan", "Rahul"];
let friend_marks: numberTupple = [85, 95, 65];

console.log(friend_names);
console.log(friend_marks);
