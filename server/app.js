require("dotenv").config();
const express = require("express");
const youtube = require("./youtube.js");
const cors = require("cors");

const app = express();

app.get("/comments", cors(), (req, res) => {
  const videoID = req.query.v;

  const promise = youtube.getComments(videoID, process.env.YOUTUBE_API);

  promise
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

app.get("/comment/replies", cors(), (req, res) => {
  const commentID = req.query.id;

  const promise = youtube.getReplies(commentID, process.env.YOUTUBE_API);

  promise
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

app.listen(3000, (req, res) => {
  console.log("Server is active at port 3000");
});
