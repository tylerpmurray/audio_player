import React, { useState } from "react";

//FINISH THIS FUNCTION To Upload the song data to the state
const Upload = ({ change }) => {
  return (
    <form>
      <input
        type="file"
        id="myFile"
        name="filename"
        accept="audio/*"
        onChange={change}
      />
    </form>
  );
};

export default Upload;
