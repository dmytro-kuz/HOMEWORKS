*************Task 2************
let http = require("http");
let mod = require("./personalmodule.js");

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Date of request: " + mod.myDateTime() + "<br>");
    response.write("" + mod.name());
    response.end();
  })
  .listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
