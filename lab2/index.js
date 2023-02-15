const http = require("http");
let fs = require("fs");
let productsDB = fs.readFileSync("products.json", "utf-8");
const server = http.createServer(function (req, res) {
  let urls = req.url.split("/");

  if (urls[1] == "home") {
    res.write("<h1>welcome to our APIs</h1>");
  } else if (urls[1] == "products" && urls[2] == undefined) {
    res.write(productsDB);
  } else if (
    urls[1] == "products" &&
    urls[2] <= JSON.parse(productsDB).length &&
    urls[2] > 0
  ) {
    let idNum = JSON.parse(productsDB)[urls[2] - 1];
    res.write(JSON.stringify(idNum));
  } else {
    res.writeHead(404);
    res.write("<h1>Error 404<br>Page Not Found</h1>");
  }
  res.end();
});

server.listen(4000, function () {
  console.log("i listen in port 4000");
});

/*

What’s npm? 

1- npm is the world's largest Software Registry.

2- The registry contains over 800,000 code packages.

3- Open-source developers use npm to share software.

4- Many organizations also use npm to manage private development.

5- npm is also a software Package Manager and Installer


how to use it to install packages locally or globally?

globally —- This drops modules in {prefix}/lib/node_modules, and puts executable files in {prefix}/bin,
where {prefix} is usually something like /usr/local. It also installs man pages in {prefix}/share/man,
if they’re supplied.

locally —- This installs your package in the current working directory.
Node modules go in ./node_modules,
executables go in ./node_modules/.bin/,
and man pages aren’t installed at all.


*/
