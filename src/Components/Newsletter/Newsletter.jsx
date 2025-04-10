import React from "react";

const Newsletter = () => {
  return (
    <div className="relative bottom-[195px] w-[1320px] mx-auto bg-[rgba(255,255,255,0.15)] border-2  botttom-4 flex justify-center p-6">
      <div className="bg-white  text-black ">
        <div
          className="w-[1272px] bg-[url('https://i.ibb.co.com/VcwCRCQ1/bg-shadow.png')] bg-center
      max-w-[1320px] mx-auto flex flex-col items-center py-[90px]"
        >
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-xl">
            Get the latest updates and news right in your inbox!
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-5 rounded-xl border border-slate-500 bg-white py-3.5 px-4 text-base placeholder:text-slate-500 mr-4"
            />
            <button
              className="rounded-xl py-3.5 px-7
          bg-linear-30 from-yellow-500 to-pink-500 font-bold
          "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
