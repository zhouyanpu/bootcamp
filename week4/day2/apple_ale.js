const express = require("express");
const serv = express();

serv.listen(3000, () => {
  console.log("listening on 3000 !");
});

serv.get(["/apple", "/ale"], (req, res) => {
  res.status(200).send("Apple or Ale ?");
});

serv.get("/who+a+", (req, res) => {
  res.status(200).send("I know it !");
});
serv.get("/:first/:last", (req, res) => {
  res.status(200).send(`Hello ${req.params.first} ${req.params.last} !!!`);
});

serv.get("/reverse/:word", (req, res) => {
  let result = req.params.word
    .split("")
    .reverse()
    .join("");
  res.status(200).send(`The reverse is ${result}!!!`);
});

serv.get("*", (req, res) => {
  res.status(404).send(`Please, enter a proper path`);
});
