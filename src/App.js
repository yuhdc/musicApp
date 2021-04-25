import React, { useState, useRef } from "react";
//adding components
import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import style
import "./style/app.scss";
//import data
import myList from "./util/data";

function App() {
  const [songs, setSongs] = useState(myList);
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(true);

  const [libraryStatus, setLibraryStatus] = useState(false);
  //ref
  const audioRef = useRef(null);
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
