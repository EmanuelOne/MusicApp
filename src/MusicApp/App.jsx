import React, { useEffect, useState } from "react";
import Player from "./conponents/Player";
import "./index.css";

// import "./style.css";
const App = ({
  currentsongIndex,
  setCurrentSongIndex,
  nextSongIndex,
  setNextSongIndex,
  songs,
}) => {
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentsongIndex + 1 > songs.length - 1) return 0;
      else return currentsongIndex + 1;
    });
  }, [currentsongIndex]);
  return (
    <Player
      songs={songs}
      currentsongIndex={currentsongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
    />
  );
};

export default App;
