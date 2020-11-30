import React, { useState } from "react";
import "./index.css";
import Playit from "./App";
import Items from "./conponents/Items";
import data from "./Musics.json";
import data2 from "./musicBank.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
let Data = [...data, ...data2];
const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
Data = shuffle(Data);
const Header = ({ setBool }) => {
  return (
    <header>
      <div>
        <h2>V Music</h2>
        <p>
          <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
        </p>
      </div>
      <nav>
        <ul>
          <li
            onClick={() => {
              setBool(false);
            }}>
            Home
          </li>
          <li
            onClick={() => {
              setBool(true);
            }}>
            Player
          </li>
        </ul>
      </nav>
    </header>
  );
};

const App = () => {
  const Home = () => {
    return (
      <>
        <main>
          <Items
            setCurrentSongIndex={setCurrentSongIndex}
            setBool={setBool}
            nextSongIndex={nextSongIndex}
            setNextSongIndex={setNextSongIndex}
            songs={songs}
          />
        </main>
      </>
    );
  };
  console.log(Data);
  const [currentsongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentsongIndex + 1);
  const [songs] = useState(Data);

  const [changeC, setChangeC] = useState(null);
  const [bool, setBool] = useState(false);
  function changeCurrent(v) {
    setChangeC(v);
  }
  return (
    <div>
      <div className="App">
        <div className="c-player">
          <Header setBool={setBool} />
          {bool ? (
            <Playit
              currentsongIndex={currentsongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              setNextSongIndex={setNextSongIndex}
              songs={songs}
            />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
