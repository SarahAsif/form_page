const fs = require("fs");
// const lodash = require("lodash");
// const moment = require("moment");
// const os = require("os");
// const path = require("node:path");
//------ grouping:
// const students = [
//   { name: "sarah", age: 30 },
//   { name: "khuld", age: 42 },
//   { name: "ruby", age: 10 },
// ];
// const map = lodash.groupBy(students, "age");
//-------- reduce:
// const numbers = [1, 2, 3, 4, 5];
// const sum = lodash.reduce(numbers, (acc, num) => acc + num, 0);
// const ol = path.parse("C:/Users/Sarah/OneDrive/Desktop/projects/node/hello.js");
// console.log(ol.ext);

//------ making a new file:
// const fileContent = 'console.log("Hello, Node.js!");
// Specify the file name
// const fileName = "nodes.js";
// fs.writeFile(fileName, fileContent, (err) => {
//   if (err) {
//     console.error("Error creating the file:", err);
//     return;
//   }
//   console.log("File created successfully.");
// });
// ----------
//making a chalk and validtor. aso exporting file.
// const { add, sub, name } = require("./nodes");
// const chalk = require("chalk");
// const validator = require("validator");
// const email = validator.isEmail("ssss@gmail.com");

// console.log(
//   email ? chalk.red.inverse.green(email) : chalk.white.inverse(email)
// );
// //------------
// ----- creating a server
// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile(`${__dirname}/users.json`, "utf-8", (err, data) => {
//       console.error(err);
//       console.log("shown data home", data);
//       res.end(`<h1>${data}</h1>`);
//     });
//   } else if (req.url === "/about") {
//     res.end("About");
//   } else {
//     res.writeHead(404);
//     res.end("<h1>page not found</h1>");
//   }
// });
// server.listen(3000, () => {
//   console.log("listenging to 3000");
// });
//-----converting into json
// const obj = {
//   name: "Sarah",
//   age: 14,
//   school: "high",
// };
// const me = JSON.stringify(obj);
// console.log(JSON.parse(me));
// const fs = require("fs");
// fs.writeFile("nodes.js", obj, (err) => {
//   console.log("error");
// })
//----making an event and registering it.
// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("sarah", (sc, ok) => {
//   console.log(`the status is ${ok} and the code is ${sc}`);
// });

// event.emit("sarah", 200, "ok");
//---- streaming files
// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();
// //first way is:
// server.on("request", (req, res) => {
//   fs.readFile("users.json", (err, data) => {
//     if (err) return console.log("errors");
//     res.end(data.toString());
//   });
// });
//second way of streaming properly:
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("users.json");
  // rstream.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });
  // rstream.on("error", () => {
  //   res.end("error");
  // });
});
server.listen(3000);
