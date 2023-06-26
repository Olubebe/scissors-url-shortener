import React from "react";
import Icon1 from "../../../assets/svg/icon2.svg";
import HeroOptionsIcons from "./HeroOptionsIcons";

const HeroOptions = () => {
  return (
    <div className="px-10 py-5">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">
            Why choose <span className="text-blue-700">Scissors</span>
          </h2>
          <p className="text-black text-xl ">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you create custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
    </div>
  );
};

export default HeroOptions;
