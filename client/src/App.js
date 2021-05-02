import React, { useEffect, useState } from "react";
import YoutubeEmbed from "./components/YoutubeEmbed";
import Comment from "./components/Comment";
import VideoDetails from "./components/VideoDetails";

function App() {
  const [videoID, setVideoID] = useState("");
  const [currentVideoID, setCurrentVideoID] = useState("L2vS_050c-M");
  const [comments, setComments] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  function handleLoadVideoClick() {
    setCurrentVideoID(videoID);
    setVideoID("");
  }

  function handleInputChange(event) {
    const video = event.target.value;
    setVideoID(video);
  }

  function createComment(comment) {
    return (
      <Comment
        key={comment.id}
        username={comment.username}
        image={comment.image}
        time={comment.time}
        text={comment.text}
        likes={comment.likes}
        replies={comment.likes}
      />
    );
  }

  useEffect(() => {
    fetch(`http://localhost:3000/video?v=${currentVideoID}`)
      .then((response) => response.json())
      .then((response) => setVideoDetails(response))
      .catch((err) => console.log(err));

    fetch(`http://localhost:3000/comments?v=${currentVideoID}`)
      .then((response) => response.json())
      .then((response) => setComments(response))
      .catch((err) => console.log(err));
  }, [currentVideoID]);

  return (
    <div>
      <div className="search-bar">
        <i className="fab fa-youtube youtube-icon"></i>
        <span className="title">YouTube With Comments</span>
        <input
          onChange={handleInputChange}
          type="text"
          value={videoID}
          placeholder="Enter video ID"
          className="search"
        />
        <button onClick={handleLoadVideoClick}>
          <i className="fas fa-search search-icon"></i>
        </button>
      </div>
      <div className="columns">
        <div className="video">
          <YoutubeEmbed videoID={currentVideoID} />
          <VideoDetails videoDetails={videoDetails} />
        </div>
        <div className="comments">{comments.map(createComment)}</div>
      </div>
    </div>
  );
}

export default App;
