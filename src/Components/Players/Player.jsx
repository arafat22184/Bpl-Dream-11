import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";

const Player = ({ player, handleChoosePlayerBtn }) => {
  const { name, country, image, type, battingType, biddingPrice } = player;
  return (
    <div className="border border-slate-300 rounded-2xl flex flex-col items-center p-6">
      <div>
        <div className="bg-slate-300 w-[376px] h-[240px] rounded-2xl border-2 border-blue-300">
          <img className="w-full h-full rounded-2xl" src={image} alt={name} />
        </div>
        <div className="flex items-center text-xl font-semibold my-5 gap-4">
          <CgProfile />
          <p>{name}</p>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-slate-300">
          <div className="flex justify-center items-center gap-3">
            <FaFlag />
            <p>{country}</p>
          </div>
          <p className="py-2 px-4 bg-slate-100 rounded-[8px]">{type}</p>
        </div>

        <div className="my-4 font-bold ">
          Rating
          <div>
            <div className="flex justify-between items-center my-3">
              <p>{battingType}</p>
              <p className="font-normal text-slate-500">{battingType}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Price: ${biddingPrice}</p>
              <button
                onClick={() => handleChoosePlayerBtn(player)}
                className="py-2 px-4 border border-slate-200 rounded-[8px] cursor-pointer"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
