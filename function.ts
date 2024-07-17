//Normal function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 6));

//function parameter with type

function addition(num1: number, num2: number) {
  return num1 + num2;
}

console.log(addition(23, 6));

//function parameter with type

function getUpper(str: string) {
  return str.toUpperCase();
}

console.log(getUpper("Vishal"));

//function parameter without type

function getLogIn(name, email, password) {
  console.log(`Hii ${name} your email is ${email} and password ${password}`);
}

getLogIn(123, "Vishal", "vishal@.com"); // without type ambiguty can occure

//function parameter with type

function getSignUp(name: string, email: string, password: number) {
  console.log(
    `Hii ${name}, your email is ${email} and password is ${password}`
  );
}

getSignUp("Vishal", "Vishal@gmail.com", 123);

//Optional parameter

function multiplication(a: number, b: number, c?: number) {
  // c is optional paramater
  return a * b * (c || 1);
}

console.log("multiplication : ", multiplication(5, 5));

//Default parameter

function power(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log(`Power is ${power(5, 5)}`);
console.log(`Power is ${power(5)}`);

//Rest Paramaters

function rest(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((s, c) => s + c, 0);
}

console.log(rest(10, 10, 10, 10, 10, 10, 10, 10, 10, 10));

//Return Type

// number

function division(a: number, b: number): number {
  return a / b;
}

console.log("Division :", division(10, 5));

//string

function stringBlock(name: string): string {
  return `Hello ${name} I from String block`;
}

console.log(stringBlock("Vishal"));

//void

function greet(count: number): void {
  for (let i = 0; i < count; i++) {
    console.log(`Hello ${i + 1}`);
  }
}

greet(5);

