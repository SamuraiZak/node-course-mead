const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mohd Zaki",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Mohd Zaki",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "Lorem ipsum bla bla bla Greta Thundberg",
  });
});

app.get("/weather", (req, res) => {
  res.send("./public/help.html");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
