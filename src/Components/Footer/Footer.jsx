import React from "react";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-[#06091A]  text-white pb-16 absolute w-full">
      <Newsletter></Newsletter>

      <div className="flex flex-col items-center justify-center mx-auto max-w-[1320px]">
        <img
          className="w-[140px] h-[142px]"
          src="https://i.ibb.co.com/hRZWy6ZL/logo-footer.png"
          alt=""
        />
      </div>
      <div className="flex justify-between mx-auto max-w-[1320px] mt-16">
        {/* Left */}
        <div>
          <h1 className="font-semibold text-xl mb-4">About Us</h1>
          <p>
            We are a passionate team<br></br>dedicated to providing the<br></br>
            best services to our customers.
          </p>
        </div>
        {/* Middle */}
        <div>
          <h1 className="font-semibold text-xl mb-4">Quick Links</h1>
          <ul className="list-disc pl-12">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Right */}
        <div>
          <h1 className="font-semibold text-xl mb-4">Subscribe</h1>
          <p>
            Subscribe to our newsletter for the<br></br>latest updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-5 rounded-l-xl bg-white py-3.5 px-4 text-base placeholder:text-slate-500"
          />
          <button
            className="rounded-r-xl py-3.5 px-7
          bg-linear-30 from-yellow-500 to-pink-500 
          "
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
