import React from "react";
import Icon6 from "../../../assets/svg/background1.png";
import Icon7 from "../../../assets/svg/vector1.png";
import Icon8 from "../../../assets/svg/vector2.png";

const GetStarted = () => {
  return (
    <div>
      <div className="relative">
        <img src={Icon6} className="w-full object-cover" alt="getstarted" />
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-5">
          <h2 className="text-white text-3xl font-bold">
            Revolutionizing Link Optimization
          </h2>
          <button className="text-xl bg-blue-600 text-white rounded-xl px-10 py-2 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
