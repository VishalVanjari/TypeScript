function fetchData1(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data Recives from 1");
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData1();
  console.log(data);
}
getData();

//Async/Await with Error Handling

function fetchData2(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let status = Math.random() > 0.5 ? new Error("Fetch Error") : null;
      if (status) {
        rej(status);
      } else {
        res("Data Recived");
      }
    }, 2000);
  });
}

async function getData2() {
  try {
    const data = await fetchData2();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getData2();

//Chaining Async/Await

function fetchData3(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data Recived...");
    }, 1000);
  });
}

function processData(data: string): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data.toUpperCase());
    }, 1000);
  });
}

async function getData3() {
  let data = await fetchData3();
  let result = await processData(data);
  console.log(result);
}

getData3();

// Promise All

function fetchData4(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data4 received");
    }, 1000);
  });
}

function fetchData5(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data5 received");
    }, 1500);
  });
}

async function getData4() {
  let data = await Promise.all([fetchData4(), fetchData5()]);
  console.log(data);
}

getData4();

//Promise race

function fetchData6(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Data 6 not recived");
    }, 1000);
  });
}

function fetchData7(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data 7 recived");
    }, 1500);
  });
}

async function getData5() {
  try {
    const data = await Promise.race([fetchData6(), fetchData7()]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData5();
