import React from "react";

function VideoDetails(props) {
  const date = new Date(props.videoDetails.date);
  return (
    <div className="video-details">
      <span className="video-title">{props.videoDetails.title}</span>
      <div className="statistics">
        <span className="views-and-date">
          {props.videoDetails.views} views • {date.toDateString()}
        </span>
        <i className="fas fa-thumbs-up icon test"></i>
        <span className="count">{props.videoDetails.likes}</span>
        <i className="fas fa-thumbs-down icon"></i>
        <span className="count">{props.videoDetails.dislikes}</span>
      </div>
    </div>
  );
}

export default VideoDetails;
