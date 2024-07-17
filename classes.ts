class Person {
  name: string;
}

let person = new Person();
person.name = "Sakshi";

console.log(person);
console.log(person.name);

// class with access Modifiers

class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

let user = new User("Khushi");
console.log(user.getName());

//Parameter Properties

class Car {
  public constructor(private brand: string) {}

  public getName(): string {
    return this.brand;
  }
}

let car = new Car("TATA");
console.log("Brand : ", car.getName());

//Readonly

class Circle {
  private readonly radius: number;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }
}

let circle = new Circle(15);
console.log("Radius is: ", circle.getRadius());

//Interface

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(public height: number, public width: number) {}

  public getArea(): number {
    return this.height * this.width;
  }
}

let rectangle = new Rectangle(20, 35);
console.log("Area is : ", rectangle.getArea());

//Abstract Class

abstract class Square {
  public abstract getArea(): number;

  public toString():string{
    return "Hello";
  }
}

class Triangle extends Square{
    public constructor(public base:number,public height :number){
        super();
    }

    public getArea():number{
        return (1/2*(this.base*this.height));
    }
}

let triangle = new Triangle(10,15);
console.log("Area of triangle is ",triangle.getArea());
