const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// sets up server for incoming and outgoing datatypes (string, array, json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

// client route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

// api route
app.get("/api", (req, res) => {
  res.json({ name: "Thomas" });
});

// runs server
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
