import React from "react";

const Items = ({
  setCurrentSongIndex,
  setBool,
  nextSongIndex,
  setNextSongIndex,
  songs,
}) => {
  return (
    <div>
      {songs.map((e, i) => {
        return (
          <button className="trans" key={i}>
            <div
              className="item"
              onClick={() => {
                if (songs.length - 1 === nextSongIndex) setNextSongIndex(0);
                setCurrentSongIndex(i);
                setBool((pre) => !pre);
              }}>
              <img src={e.img_src} alt="" />
              <div>
                <p>{e.title}</p>
                <p>{e.artist}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Items;
