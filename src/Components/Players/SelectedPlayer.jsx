import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const SelectedPlayer = ({ selectedPlayer, handleDeleteBtn }) => {
  const { name, image, type } = selectedPlayer;
  return (
    <div className="flex justify-between items-center p-6 border border-slate-300 rounded-2xl">
      {/* LeftAside */}
      <div className="flex items-center gap-6">
        <img
          className="w-20 h-20 border border-blue-200 rounded-xl"
          src={image}
          alt={name}
        />
        <div>
          <h1 className="font-semibold text-2xl">{name}</h1>
          <p>{type}</p>
        </div>
      </div>
      {/* RightAside */}
      <div className="text-red-500">
        <button
          className="cursor-pointer p-5"
          onClick={() => handleDeleteBtn(selectedPlayer)}
        >
          <RiDeleteBin5Fill size={30} />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
