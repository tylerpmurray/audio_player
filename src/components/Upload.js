import React, { useState } from "react";

//FINISH THIS FUNCTION To Upload the song data to the state
const Upload = (props) => {
  const upload = (event) => {
    props.setSong({ new: "song" });
    console.log(props.song);
  };

  return (
    <form>
      <input
        type="file"
        id="myFile"
        name="filename"
        accept="audio/*"
        onChange={upload}
      />
    </form>
  );
};

export default Upload;
