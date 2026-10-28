
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Node.js and Express server!");
});

// About route
app.get("/about", (req, res) => {
  res.status(200).json({
    name: "K. Varshitha",
    section: "113 S-14 CSE-QE-2A"
  });
});

// Time route
app.get("/time", (req, res) => {
  res.status(200).json({
    currentDateTime: new Date()
  });
});

// 404 route
app.use((req, res) => {
  res.status(404).send("404 - Route not found");
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
