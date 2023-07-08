const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

//404 page
/* The position of this use function is important, bcs express
executes the code from top to bottom and when it don't find
the match for the requested path, it fires this function */
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});