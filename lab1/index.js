// import fs from 'fs';

const fs = require("fs");
// let columns = [
//   {
//     id: 0,
//     name: "",
//     degree: 0,
//   },
// ];

if (process.argv[2] == "add") {
  let data = JSON.parse(fs.readFileSync("studentsDegree.txt", "utf-8"));
  let idCount = data[data.length - 1].id;
  myObj = {
    id: idCount + 1,
    name: process.argv[3],
    degree: process.argv[4],
  };
  data.push(myObj);
  fs.writeFileSync("studentsDegree.txt", JSON.stringify(data));
}
if (process.argv[2] == "list") {
  let data = JSON.parse(fs.readFileSync("studentsDegree.txt", "utf-8"));
  data.forEach((e) => {
    console.log(e["id"], e["name"], e["degree"]);
  });
}
if (process.argv[2] == "edit") {
  let data = JSON.parse(fs.readFileSync("studentsDegree.txt", "utf-8"));
  editPos = process.argv[4];
  data[editPos]["degree"] = process.argv[3];
  fs.writeFileSync("studentsDegree.txt", JSON.stringify(data));
}
if (process.argv[2] == "delete") {
  let data = JSON.parse(fs.readFileSync("studentsDegree.txt", "utf-8"));
  data.splice(process.argv[3], 1);
  fs.writeFileSync("studentsDegree.txt", JSON.stringify(data));
}
if (process.argv[2] == "sum") {
  let data = JSON.parse(fs.readFileSync("studentsDegree.txt", "utf-8"));
  let mySum = 0;
  data.forEach((e) => {
    mySum = eval(parseInt(e["degree"]) + mySum);
  });
  console.log(mySum);
}
