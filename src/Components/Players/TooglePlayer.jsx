import React from "react";
import Player from "./Player";
const TooglePlayer = ({ players, handleChoosePlayerBtn }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {players.map((player) => (
        <Player
          key={player.playerId}
          player={player}
          handleChoosePlayerBtn={handleChoosePlayerBtn}
        ></Player>
      ))}
    </div>
  );
};

export default TooglePlayer;
