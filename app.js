const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connect to db

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("connected to db");
    // listen for requests only after app is connected to db
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

//middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// app.use((req, res, next) => {
//     console.log('New request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

//404 page
/* The position of this use function is important, bcs express
executes the code from top to bottom and when it don't find
the match for the requested path, it fires this function */
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
