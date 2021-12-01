import React, { useState } from "react";
import "./Upload.css";

//FINISH THIS FUNCTION To Upload the song data to the state
const Upload = ({ change, upload }) => {
  return (
    <form>
      <input
        type="file"
        id="myFile"
        name="filename"
        accept="audio/*"
        onChange={change}
        value={upload}
      />
    </form>
  );
};

export default Upload;
