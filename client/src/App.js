import React, { useState } from "react";
import YoutubeEmbed from "./components/YoutubeEmbed";

function App() {
  const [videoID, setVideoID] = useState("");
  const [currentVideoID, setCurrentVideoID] = useState("L2vS_050c-M");

  function handleLoadVideoClick(event) {
    setCurrentVideoID(videoID);
    setVideoID("");
    event.preventDefault();
  }

  function handleInputChange(event) {
    const video = event.target.value;
    setVideoID(video);
  }

  return (
    <div>
      <input
        onChange={handleInputChange}
        type="text"
        value={videoID}
        placeholder="Enter video ID"
      />
      <button onClick={handleLoadVideoClick}>Load Video</button>
      <div className="video">
        <YoutubeEmbed videoID={currentVideoID} />
      </div>
    </div>
  );
}

export default App;
