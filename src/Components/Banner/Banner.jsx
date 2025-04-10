import React from "react";

const Banner = ({ handleCreditBtn }) => {
  return (
    <div className="w-11/12 max-w-[1320px] mx-auto bg-black mt-6 rounded-3xl">
      <div className="rounded-3xl  bg-[url('https://i.ibb.co.com/VcwCRCQ1/bg-shadow.png')] bg-cover">
        <div className="mx-auto flex flex-col justify-center items-center py-16 gap-6">
          <img src={"https://i.ibb.co.com/60zNBrrR/banner-main.png"} alt="" />
          <h1 className="text-white text-[40px] font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white">Beyond Boundaries Beyond Limits</p>

          <p
            onClick={handleCreditBtn}
            className="p-1 border-2 border-white rounded-2xl cursor-pointer"
          >
            <button className="py-3.5 px-5 bg-linear-to-r from-purple-400 to-[#f3c454] rounded-[12px] cursor-pointer">
              Claim Free Credit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
