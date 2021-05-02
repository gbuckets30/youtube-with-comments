const { google } = require("googleapis");

function Video(title, views, date, likes, dislikes) {
  this.title = title;
  this.views = views;
  this.date = date;
  this.likes = likes;
  this.dislikes = dislikes;
}

function Comment(id, username, image, time, text, likes, replies) {
  this.id = id;
  this.username = username;
  this.image = image;
  this.time = time;
  this.text = text;
  this.likes = likes;
  this.replies = replies;
}

function Reply(username, image, time, text, likes) {
  this.username = username;
  this.image = image;
  this.time = time;
  this.text = text;
  this.likes = likes;
}

exports.getComments = (videoID, key) => {
  return google
    .youtube("v3")
    .commentThreads.list({
      key: key,
      part: ["snippet"],
      maxResults: 2000,
      order: "relevance",
      videoId: videoID,
    })
    .then((result) => {
      return extractRelevantCommentData(result.data);
    })
    .catch((err) => console.log(err));
};

exports.getReplies = (commentID, key) => {
  return google
    .youtube("v3")
    .comments.list({
      key: key,
      part: ["snippet"],
      maxResults: 100,
      parentId: commentID,
    })
    .then((result) => extractRelevantReplyData(result.data))
    .catch((err) => console.log(err));
};

exports.getVideoDetails = (videoID, key) => {
  return google
    .youtube("v3")
    .videos.list({
      key: key,
      part: ["snippet", "statistics"],
      id: videoID,
    })
    .then((result) => extractRelevantVideoData(result.data))
    .catch((err) => console.log(err));
};

function extractRelevantVideoData(result) {
  const video = result.items[0];
  return new Video(
    video.snippet.title,
    video.statistics.viewCount,
    video.snippet.publishedAt,
    video.statistics.likeCount,
    video.statistics.dislikeCount
  );
}

function extractRelevantCommentData(result) {
  const comments = result.items;
  let arr = [];
  comments.forEach((comment) => {
    const data = comment.snippet.topLevelComment.snippet;
    arr.push(
      new Comment(
        comment.snippet.topLevelComment.id,
        data.authorDisplayName,
        data.authorProfileImageUrl,
        data.updatedAt,
        data.textOriginal,
        data.likeCount,
        comment.snippet.totalReplyCount
      )
    );
  });
  return arr;
}

function extractRelevantReplyData(result) {
  const replies = result.items;
  let arr = [];
  replies.forEach((reply) => {
    const data = reply.snippet;
    arr.push(
      new Reply(
        data.authorDisplayName,
        data.authorProfileImageUrl,
        data.updatedAt,
        data.textOriginal,
        data.likeCount
      )
    );
  });
  arr.reverse();
  return arr;
}
