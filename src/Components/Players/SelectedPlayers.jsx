import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, handleDeleteBtn }) => {
  return (
    <div className="space-y-6">
      {selectedPlayers.map((selectedPlayer) => (
        <SelectedPlayer
          key={selectedPlayer.playerId}
          selectedPlayer={selectedPlayer}
          handleDeleteBtn={handleDeleteBtn}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
