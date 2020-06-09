const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// runs server
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
