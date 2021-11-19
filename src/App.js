import "./App.css";
import { useState, useEffect } from "react";
import Playlist from "./components/Playlist";
import Upload from "./components/Upload";
import audio from "./audio/doja remix_B4.mp3";
import axios from "axios";

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

  const [song, setSong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/songs");
      console.log(result.data);
      setSong(result.data);
    };
    fetchData();
  }, []);

  const upload = (event) => {
    let file = event.target.files;
    console.log(file);
    axios
      .post("http://localhost:8000/songs", {
        id: Math.floor(Math.random) * 1000,
        title: file[0].name,
        artist: "artist4",
        genre: "genre4",
        ref: URL.createObjectURL(file[0]),
      })
      .then((resp) => {
        console.log(resp.data);
        const fetchData = async () => {
          const result = await axios("http://localhost:8000/songs");
          console.log(result.data);
          setSong(result.data);
        };
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSong = (id) => {
    axios
      .delete(`http://localhost:8000/songs/${id}/`)
      .then((resp) => {
        console.log(resp.data);
        const fetchData = async () => {
          const result = await axios("http://localhost:8000/songs");
          console.log(result.data);
          setSong(result.data);
        };
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Upload song={song} change={upload} />
      <Playlist song={song} deleteSong={deleteSong} />
    </div>
  );
}

export default App;
