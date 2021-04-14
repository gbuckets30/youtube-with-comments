const { google } = require("googleapis");

exports.getComments = (videoID, key) => {
  return google
    .youtube("v3")
    .commentThreads.list({
      key: key,
      part: ["snippet", "replies"],
      maxResults: 2000,
      order: "relevance",
      videoId: videoID,
    })
    .then((result) => {
      return showComments(result.data);
    })
    .catch((err) => console.log(err));
};

function showComments(result) {
  let comments = result.items;
  let arr = [];
  comments.forEach((comment) => {
    arr.push(comment.snippet.topLevelComment.snippet.textOriginal);
  });
  return arr;
}
