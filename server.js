const http = require("http");
const fs = require("fs");

// creates a server and store the instance of the server in the const
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "";
  switch (req.url) {
    case "/":
      path = "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path = "about.html";
      res.statusCode = 200;
      break;
      // if a resource is permenantly moved 
    case "/about-me":
      res.statusCode = 301;
      res.setHeader('Location', '/about')
      res.end()
      break;
    default:
      path = "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file in response
  fs.readFile(`./views/${path}`, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
