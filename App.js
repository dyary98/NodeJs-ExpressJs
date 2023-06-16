// const names = require('./firstModule')
// const sayHi = require('./secondModule')
// const data = require('./thirdModule')
// require('./fourthModule')
// console.log(names);
// console.log(data);
// sayHi(names.john)
// sayHi(names.peter)

//! dway yak sa3at la coursaka

// const os = require('os');
// const user = os.userInfo();
// console.log(user)

// console.log("the system uptime in secs is :"+os.uptime()/60/60);

// const currentOS ={
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS)

// //! path module
// const path = require('path');
// console.log(path.sep)
// console.log(path.join("dyartty","slawe"))

// const absPath = path.resolve(__dirname)
// console.log(absPath)

//! // HTTP Module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("here is the about page");
  }
  res.end(`
      <h1>Opps this page is not available at the moment </h1>
      <h4>Please return back to the Home Page</h4>
      <a href="/" >back Home </a>
      `);
});

server.listen(5000);
