import React, { useState } from "react";
import Song from "./Song.js";

const Playlist = ({ song }) => {
  return (
    <div>
      {song.map((e) => {
        return <Song song={e} key={e.id} />;
      })}
    </div>
  );
};

export default Playlist;
