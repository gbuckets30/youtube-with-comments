import React from "react";

function Comment(props) {
  const time = new Date(props.time);
  return (
    <div className="comment-box">
      <div className="column-left">
        <img className="comment-profile-image" src={props.image} alt=""></img>
      </div>

      <div className="column-right">
        <span className="comment-username">{props.username}</span>
        <span className="comment-time">{time.toDateString()}</span>
        <div className="comment-text">{props.text}</div>
        <div className="likes">
          <i className="fas fa-thumbs-up icons"></i>
          <span className="like-count">{props.likes}</span>
          <i className="fas fa-thumbs-down icons"></i>
        </div>
        <div className="replies">
          <i className="fas fa-sort-down sort-down-icon"></i>
          <span className="view-reply">View {props.replies} replies</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
