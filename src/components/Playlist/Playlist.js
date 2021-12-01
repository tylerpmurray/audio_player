import React, { useState, useEffect } from "react";
import Song from "../Song/Song.js";

const Playlist = ({ song, deleteSong }) => {
  return (
    <div>
      {song.map((e) => {
        return <Song song={e} key={e.id} id={e.id} deleteSong={deleteSong} />;
      })}
    </div>
  );
};

export default Playlist;
