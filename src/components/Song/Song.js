import React from "react";
import "./Song.css";
import CloseButton from "react-bootstrap/CloseButton";

const Song = ({ song, deleteSong, id }) => {
  return (
    <div className="flex-container">
      <div className="names">
        <div className="flex-item title">{song.title}</div>
        <br />
        <div className="flex-item artist title">Artist</div>
        <div>
          <br />
        </div>
        <audio className="flex-item audio" src={song.ref} controls />
        <CloseButton
          variant="white"
          className="flex-item close"
          onClick={() => deleteSong(id)}
        />
      </div>
    </div>
  );
};

export default Song;
