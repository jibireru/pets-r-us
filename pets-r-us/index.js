//Amanda Groves
//20 June 2022
//Pets-R-S
//Modified 20 June 2022
//Description: Index routing for Pets-R-Us

const express = require("express");
const app = express();
const port = 3000;

app.engine(".html", require("ejs").__express);
app.set("views", "./views");
app.set("view engine", "html");

app.get("", (req, res) => {
  res.render("index");
});

app.get("/grooming", (req, res) => {
  res.render("grooming");
});

app.listen(port, () => {
    console.log("Application started and listening on port" + port);
  });