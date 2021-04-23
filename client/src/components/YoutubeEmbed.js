import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function YoutubeEmbed(props) {
  return (
    <LiteYouTubeEmbed
      id={props.videoID}
      title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  );
}

export default YoutubeEmbed;
