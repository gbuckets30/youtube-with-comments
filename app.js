require("dotenv").config();
const express = require("express");
const youtube = require("./youtube.js");

const app = express();

// configure website to use ejs templates
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { videoID: "QZ4BXGgmATU" });
});

app.post("/", express.urlencoded({ extended: false }), (req, res) => {
  const videoID = req.body.videoID;
  const promise = youtube.getComments(videoID, process.env.YOUTUBE_API);

  promise
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
});

app.listen(3000, (req, res) => {
  console.log("Server is active at port 3000");
});
