import "./App.css";
import { useState, useEffect } from "react";
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

  // const fetchData = fetch("http://localhost:8000/songs")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return data;
  //   });

  const [song, setSong] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/songs")
      .then((response) => response.json())
      .then((data) => setSong(data.songs));
  }, []);

  const upload = (event) => {
    let file = event.target.files;
    let newObj = {
      id: 4,
      title: URL.createObjectURL(file[0]),
      artist: "artist4",
      genre: "genre4",
      ref: URL.createObjectURL(file[0]),
    };
    setSong((prevSong) => [...prevSong, newObj]);
  };

  return (
    <div className="App">
      <Upload song={song} change={upload} />
      <Playlist song={song} />
    </div>
  );
}

export default App;
