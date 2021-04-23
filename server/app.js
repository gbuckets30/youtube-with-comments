require("dotenv").config();
const express = require("express");
const youtube = require("./youtube.js");

const app = express();

app.get("/comments", (req, res) => {
  const videoID = req.query.v;

  const promise = youtube.getComments(videoID, process.env.YOUTUBE_API);

  promise
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
});

app.listen(3000, (req, res) => {
  console.log("Server is active at port 3000");
});
