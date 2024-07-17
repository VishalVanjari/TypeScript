//Closure 1

function outerfun(name: string, marks: number) {
  let str = `Hello ${name} you got ${marks} Marks.`;
  function innerfun() {
    console.log(str);
  }
  return innerfun;
}

let data = outerfun("Vishal", 95);
data();

//Closure 2

function delayedGreting(name: string) {
  let message = `Hello, ${name}!`;

  setTimeout(() => {
    console.log(message);
  }, 1000);
}

delayedGreting("Jayesh");


//Closure 3

function createAdder(x : number){
    function adder(y:number){
        return x+y;
    }
    return adder;
}

let addFive = createAdder(5);
console.log(addFive(10));
console.log(addFive(20));


    