import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const PlayerControlls = ({ isPlaying, setIsPlaying, skipSong, song }) => {
  return (
    <div className="c-player--controls">
      <button
        className="skip-btn"
        onClick={() => {
          skipSong(false);
        }}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => {
          setIsPlaying((pre) => !pre);
        }}>
        <FontAwesomeIcon icon={!isPlaying ? faPlay : faPause} />
      </button>
      <button
        className="skip-btn"
        onClick={() => {
          skipSong();
        }}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControlls;
