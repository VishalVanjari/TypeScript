// 1. Primitive types

//String

let firstName: string = "Vishal";
console.log(firstName);

// firstName = 30 ;     it will give error

let lastName = "Vanjari"; // also valid due to implicit cheacking

console.log(lastName.toLowerCase());

console.log(lastName.toUpperCase());

console.log(lastName);
let arr = ["dfghj", 56, true];
//lastName = arr[0];

let rollno: number = 121;

let person1 = {
  name: "Vishal",
  rollno: 121,
  city: "Shirpur",
};

console.log(person1.name);

//Number

let num: number = 7;

let num1 = 14;

// num = "Vishal";      give error

num.toFixed();

//Boolean

let isLogIn: boolean = true;

let isLogOut = false;

console.log(isLogIn);

console.log(isLogOut);

//Null

let emptyValue: null = null;

console.log(emptyValue);

//Undefined

let notAssigned: undefined = undefined;
console.log(notAssigned);

// 2.Special Types :

// any

let a: any = 121;

a = true;
a = "Cricket";

console.log(a);

// unknown

let b: unknown = 1;
b = "Vishal";
console.log(b);

// Never

// let isIn : never = true;     it always give error

//undefined

let str: undefined = undefined;

console.log(str);

// str = "Vishal";                 it will give error

//Null

let z: null = null;

console.log(z);

// z = 123;                          it will give error

//Array

let names: string[] = ["abc", "def", "xyz"];

console.log(names);

let marks: readonly number[] = [54, 69, 28, 87, 25, 52];
// marks.push(25);                  it will give error
console.log(marks);

let numbers = [58, 25, 14, 36, 87];
numbers.push(56);
console.log(numbers);

//numbers.push("string");           error

let head: number = numbers[0];
console.log(head);
