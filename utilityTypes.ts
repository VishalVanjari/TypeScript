//1. Partial

interface Point {
  x: number;
  y: number;
}

let point: Partial<Point> = {};
point.x = 10;
console.log(point.x);

//2.Required

interface Shape {
  type: string;
  radius: number;
  area?: number;
}

let shape: Required<Shape> = {
  type: "Circle",
  radius: 15,
  area: 425,
};

console.log(shape);

//3. Record

let nameAndAgeMap: Record<string, number> = {
  khushi: 21,
  Chetana: 23,
};

console.log(nameAndAgeMap);

//4. Omit

interface Person {
  name: string;
  city: string;
  age: number;
}

let vishal: Omit<Person, "city" | "age"> = {
  name: "Vishal Vanjari",
};

console.log(vishal);

//5. Pick

let chetan: Pick<Person, "age"> = {
  age: 19,
};

console.log(chetan);

//6. Exclude

type Primitive = string | number | boolean;
const val: Exclude<Primitive, string> = true;

console.log(val);

//7. ReturnType

type PointGenerator = () => {
  x: number;
  y: number;
};

let points: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};

console.log(points);

//8. Parameters

type Cars = (parameter: { brand: string; year: number }) => void;

let car: Parameters<Cars>[0] = {
  brand: "TATA",
  year: 2018,
};

console.log(car);

//9.Readonly

interface Animal {
    name :string,
    age:number
}

let horse : Readonly<Animal> ={
    name : "Badal",
    age : 15
}
//horse.name = "Sheru";               //Cannot assign to 'name' because it is a read-only property.
console.log(horse);
