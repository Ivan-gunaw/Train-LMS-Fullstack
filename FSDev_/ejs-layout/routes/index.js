const route = require("express").Router();

route.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("index.ejs"); // tambahkan render ("index.ejs") -> untuk menampilkan di website
});

const todoRoutes = require("./todos");
const userRoutes = require("./users");
route.use("/todos", todoRoutes);
route.use("/users", userRoutes);

module.exports = route;