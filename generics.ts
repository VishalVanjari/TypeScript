//Generics with Functions

function creatFun<Type1, Type2>(value1: Type1, value2: Type2): [Type1, Type2] {
  return [value1, value2];
}

console.log(creatFun<string, number>("Vishal", 123));

//with calsses

class NamedValue<T> {
  private value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this.value = value;
  }

  public getValue(): T | undefined {
    return this.value;
  }

  public toString(): string {
    return `${this.name}: ${this.value}`;
  }
}

let value = new NamedValue<number>("myNumber");
value.setValue(10);
console.log(value.toString()); 
