const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(express.static("public"));

// path to index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
// path to notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

