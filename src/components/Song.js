import React from "react";

const Song = ({ song }) => {
  return (
    <div>
      <p>{song.title}</p>
      <audio src={song.ref} controls />
    </div>
  );
};

export default Song;
