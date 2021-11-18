import "./App.css";
import { useState } from "react";
import Playlist from "./components/Playlist";

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


  return (
    <div className="App">
      <button onClick={play}>{button}</button>
      <div style={hide}>Hey Tyler</div>
      <Playlist />
    </div>
  );
}

export default App;
