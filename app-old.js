const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.setHeader("Content-Disposition", "attachment; filename=list.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("Hola mundo");
    res.end();
  })

  .listen(8080);

console.log("Escuchando el puerto", 8080);
