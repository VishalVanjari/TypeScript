//Callback

function greeting(callback: (name: string) => void, name: string) {
  console.log("Hello", name);
  callback(name);
}

function sayGoodBye(name: string) {
  console.log("goodBye", name);
}

greeting(sayGoodBye, "Vishal");

// Callback 2

function sum(
  a: number,
  b: number,
  add: (a: number, b: number) => number
): number {
  let sum = add(a, b);
  return sum;
}

function add(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 5, add));

//// Callback 3

function fetchData(callback) {
  setTimeout(() => {
    callback("Data Recived");
  }, 1000);
}

fetchData((res: string) => {
  console.log(res);
});

// Callback 4

function getTimer(): number {
  return new Date().getTime();
}

function getTime(name: string, getTimer: () => number) {
  console.log("Hello ", name, "Today's Date and time is", getTimer());
}

getTime("Vishal", getTimer);

//callback 5

function fetchData1(callback: (data: string, status: number) => void) {
  setTimeout(() => {
    callback("Data Recived", 200);
  }, 1000);
}

fetchData1((data, status) => {
  console.log(data, status);
});


// Callback hell

function getData(dataID: number, getNextData: () => void) {
  setTimeout(() => {
    console.log("Data Recived from ", dataID);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
console.log("Getting Data 1");
getData(1, () => {
  console.log("Getting Data 2");
  getData(2, () => {
    console.log("Getting Data 3");
    getData(3, () => {
      console.log("Getting Data 4");
      getData(4, () => {});
    });
  });
});
