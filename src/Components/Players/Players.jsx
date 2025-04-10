import React from "react";
import TooglePlayer from "./TooglePlayer";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({
  players,
  handleChoosePlayerBtn,
  selectedPlayers,
  handleSelectedBtn,
  isSelected,
  handleAvailableBtn,
  handleDeleteBtn,
  handleAddMorePlayerBtn,
}) => {
  const activeBtn = "border border-[#E7FE29] bg-[#E7FE29]";
  const deActiveBtn = "border border-gray-300";

  return (
    <div className="w-11/12 max-w-[1320px] mx-auto mt-24 mb-56">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold">
          {isSelected
            ? `Selected Players (${selectedPlayers.length}/${players.length})`
            : "Available Players"}
        </h3>
        <div>
          <button
            onClick={handleAvailableBtn}
            className={`rounded-l-2xl py-3.5 px-[30px] border-r-0 cursor-pointer ${
              isSelected ? deActiveBtn : activeBtn
            }`}
          >
            Available
          </button>
          <button
            onClick={handleSelectedBtn}
            className={`rounded-r-2xl py-3.5 px-[30px] cursor-pointer  border-l-0 ${
              isSelected ? activeBtn : deActiveBtn
            }`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      {isSelected ? (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          handleSelectedBtn={handleSelectedBtn}
          handleDeleteBtn={handleDeleteBtn}
        ></SelectedPlayers>
      ) : (
        <TooglePlayer
          players={players}
          handleChoosePlayerBtn={handleChoosePlayerBtn}
        ></TooglePlayer>
      )}
      {isSelected && (
        <div className="p-2 rounded-2xl border border-black inline-block mt-12">
          <button
            onClick={handleAddMorePlayerBtn}
            className="bg-[#E7FE29] py-3.5 px-5 rounded-xl font-bold cursor-pointer"
          >
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
};

export default Players;
