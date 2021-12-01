import "./App.css";
import { useState, useEffect } from "react";
import Playlist from "./components/Playlist/Playlist";
import Upload from "./components/Upload/Upload";
import audio from "./audio/doja remix_B4.mp3";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [button, setButton] = useState("Play");
  const [hide, setHide] = useState({ display: "block" });

  const [song, setSong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/songs");
      console.log(result.data);
      setSong(result.data);
    };
    fetchData();
  }, []);

  const [fileUpload, setFileUpload] = useState("");

  const upload = (event) => {
    let file = event.target.files;
    console.log("file: ", file);

    axios
      .post("http://localhost:8000/songs", {
        id: Math.floor(Math.random) * 1000,
        title: file[0].name,
        artist: "artist4",
        genre: "genre4",
        ref: file[0],
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
    setFileUpload("");
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
      <Upload song={song} change={upload} upload={fileUpload} />
      <Playlist song={song} deleteSong={deleteSong} />
    </div>
  );
}

export default App;
