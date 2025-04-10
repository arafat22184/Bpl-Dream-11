import React from "react";
import { SiBitcoinsv } from "react-icons/si";

const Navbar = ({ coin }) => {
  return (
    <div className="w-11/12 max-w-[1320px] mx-auto flex items-center justify-between mt-12">
      <div>
        <img src={"https://i.ibb.co.com/YBYMYxC9/logo.png"} alt="" />
      </div>
      <div className="flex items-center gap-12">
        <ul className="flex items-center gap-12">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <div className="flex justify-center items-center border border-gray-300 rounded-[12px] py-4 px-5 font-bold">
          {coin} Coin
          <p className="text-amber-300 ml-2">
            <SiBitcoinsv size={20} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
