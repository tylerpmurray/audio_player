import React, { useState } from "react";
import Song from "./Song.js";
import audio from "../audio/doja remix_B4.mp3";

const Playlist = () => {
  const songObj = [
    {
      title: "song1",
      artist: "doja",
      genre: "genre1",
      ref: audio,
    },
    {
      title: "song2",
      artist: "artist2",
      genre: "genre2",
      ref: "../audio/doja remix_B4.mp3",
    },
  ];

  const [song, setSong] = useState(songObj);

  return (
    <div>
      <Song song={song} />
    </div>
  );
};

export default Playlist;
