import React from "react";

const Song = ({ song, deleteSong, id }) => {
  return (
    <div>
      <p>{song.title}</p>
      <audio src={song.ref} controls />
      <h1>{id}</h1>
      <button onClick={() => deleteSong(id)}>Delete</button>
    </div>
  );
};

export default Song;
