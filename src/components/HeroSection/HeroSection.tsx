import React from "react";
import Image2 from "../../assets/svg/HeroImage.svg";
import Image3 from "../../assets/svg/HeroImage2.svg";
import HeroAnalytics from "./component/HeroAnalytics";
import Icon1 from "../../assets/svg/icon2.svg";
import Icon2 from "../../assets/svg/icon3.svg";
import Icon3 from "../../assets/svg/icon4.svg";
import Icon4 from "../../assets/svg/icon1.png";
import Icon5 from "../../assets/svg/demo.png";
import HeroOptions from "./component/HeroOptions";
import HeroOptionsIcons from "./component/HeroOptionsIcons";
import PricingPage from "./component/PricingPage";
import FAQ from "./component/FAQ";
import GetStarted from "./component/GetStarted";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <div>
      <Navbar/>
      <div className=" mt-10 sm:px-10 flex flex-col justify-center justify-self-center text-black text-center space-y-10  mx-auto max-w-6xl h-screen ">
        <h2 className="text-5xl text-center items-center ">
          Optimize Your Online Experience With Our Advanced{" "}
          <span className="capitalize text-blue-700">URL Shortening</span>{" "}
          Solution
        </h2>
        <p>
          Personlize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div className="flex justify-center gap-5">
          <button className="bg-blue-700 rounded-2xl px-6 py-2 text-white font-medium">
            Sign Up
          </button>
          <button className="text-blue-700 font-medium">Learn More</button>
        </div>
        <img src={Image2} className="h-60" alt="background image" />
        <img src={Image3} className="h-44" alt="" />
      </div>
      <div className="bg-[#F9FBFD]">
        <HeroAnalytics />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <HeroOptions />
          </div>
          <div className="flex px-10 flex-wrap w-full mt-5">
            <div className="w-full sm:w-1/2">
              <HeroOptionsIcons
                title="Url Shortening"
                image={Icon1}
                description="Scissors allows you to shorten URLs of your business, events, Shorten your URL at the scale, URLs redirects "
              />
            </div>
            <div className="w-full sm:w-1/2">
              <HeroOptionsIcons
                title="Custom URLs"
                image={Icon2}
                description="With scissors, you can create custom URLs, with the length you want! A solution for socials and business."
              />
            </div>
            <div className="w-full sm:w-1/2">
              <HeroOptionsIcons
                title="QR Codes"
                image={Icon3}
                description="Generate QR codes for your business, event. Bring your audience and customer to your doorstep with this scan and go solution"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <HeroOptionsIcons
                title="Data Analytics"
                image={Icon4}
                description="Receive data on the usage of either your shortened URLs, custom URLs or generated QR codes.Embedded to monitor progress."
              />
            </div>
          </div>
        </div>
      </div>
      <PricingPage />
      <div className="object-cover  py-10">
        <img src={Icon5} className="w-full object-cover h-3/5" alt="demo" />
      </div>
      <div className=" py-10">
      <FAQ/>
      </div>
    <GetStarted />
    <Footer />
    </div>
  );
};

export default HeroSection;
