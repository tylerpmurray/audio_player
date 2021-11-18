import React from "react";

const Song = (props) => {
  return (
    <div>
      <p>{props.song[0].title}</p>
      <audio src={props.song[0].ref} controls />
    </div>
  );
};

export default Song;
