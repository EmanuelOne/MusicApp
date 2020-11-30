import React, { useRef, useState, useEffect } from "react";
import PlayerControlls from "./playerControlls";
import PlayerDetail from "./PlayerDetail";
const Player = ({
  songs,
  nextSongIndex,
  currentsongIndex,
  setCurrentSongIndex,
}) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      console.log("playing");
    } else audioEl.current.pause();
  });
  function skipSong(forward = true) {
    if (forward) {
      setCurrentSongIndex(() => {
        let temp = currentsongIndex;
        temp++;
        if (temp > songs.length - 1) temp = 0;
        return temp;
      });
    } else
      setCurrentSongIndex(() => {
        let temp = currentsongIndex;
        temp--;
        if (temp < 0) temp = 0;
        return temp;
      });
  }
  return (
    <div className="player">
      <audio src={songs[currentsongIndex].src} ref={audioEl}></audio>
      <h4>Playing now</h4>
      <PlayerDetail song={songs[currentsongIndex]} />
      <PlayerControlls
        song={songs[currentsongIndex]}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p>
        <strong>Next Up:</strong>
        {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
