import "./App.css";
import { useState } from "react";
import Playlist from "./components/Playlist";
import Upload from "./components/Upload";
import audio from "./audio/doja remix_B4.mp3";

function App() {
  const [button, setButton] = useState("Play");
  const [hide, setHide] = useState({ display: "block" });

  const play = () => {
    if (button === "Play") {
      setButton("Pause");
      setHide({ display: "none" });
    } else {
      setButton("Play");
      setHide({ display: "block" });
    }
  };

  const songObj = [
    {
      id: 1,
      title: "song1",
      artist: "doja",
      genre: "genre1",
      ref: audio,
    },
    {
      id: 2,
      title: "song2",
      artist: "artist2",
      genre: "genre2",
      ref: audio,
    },
    {
      id: 3,
      title: "song3",
      artist: "artist3",
      genre: "genre3",
      ref: audio,
    },
  ];

  const [song, setSong] = useState(songObj);

  return (
    <div className="App">
      <Upload song={song} setSong={setSong} />
      <Playlist song={songObj} />
    </div>
  );
}

export default App;
