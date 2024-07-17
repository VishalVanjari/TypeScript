//Promise

function getData(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data Recived");
    }, 2000);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//Promises Chaining

function step1(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data from Step 1");
    }, 2000);
  });
}
function step2(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data from Step 2");
    }, 2000);
  });
}
function step3(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data from Step 3");
    }, 2000);
  });
}

step1().then((res) => {
  console.log(res);
  step2().then((res) => {
    console.log(res);
    step3().then((res) => {
      console.log(res);
      console.log("All Data Complete");
    });
  });
});

// Promise All

function fetchData1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data 1 received");
    }, 1000);
  });
}

function fetchData2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data 2 received");
    }, 1500);
  });
}

async function getData1() {
  let data = await Promise.all([fetchData1(), fetchData2()]);
  console.log(data);
}

getData1();

//Promise race

function fetchData3(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Data 3 not recived");
    }, 1000);
  });
}

function fetchData4(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data 4 recived");
    }, 1500);
  });
}

async function getData2() {
  try {
    const data = await Promise.race([fetchData3(), fetchData4()]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData2();
