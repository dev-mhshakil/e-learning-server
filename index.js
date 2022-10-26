const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("e-learning server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((n) => n.id === id);
  res.send(course);
});

app.get("/checkout/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((n) => n.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`e-learning server is running on port: ${port}`);
});
