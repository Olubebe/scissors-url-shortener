import React from "react";
import Logo from "../../assets/svg/Logo.svg";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="px-10 py-10">
      <div className="flex w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/3">
            <img src={Logo} className="" alt="logo" />
            <div className="flex gap-10 mt-5">
              <ImFacebook2 className="text-2xl text-blue-700" />
              <BsTwitter className="text-2xl text-blue-700" />
              <BsInstagram className="text-2xl text-blue-700" />
              <BsLinkedin className="text-2xl text-blue-700" />
            </div>
          </div>
          <div className="w-full mt-3 md:w-2/3 flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/3">
              <div className="text-xl font-medium mb-2">
                <h2>Why Scissors ?</h2>
              </div>
              <ul className="space-y-2">
                <li>Scissor 101</li>
                <li>Integration & API</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 mb-2">
              <div className="text-xl font-medium">
                <h2>Solution</h2>
              </div>
              <ul className="space-y-2">
                <li>Social Media</li>
                <li>Digital Marketing</li>
                <li>Customer Service</li>
                <li>For Developer</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 mb-2">
              <div className="text-xl font-medium">
                <h2>Products</h2>
              </div>
              <ul className="space-y-2">
                <li>Link Management</li>
                <li>QR Codes</li>
                <li>Link-in-bio</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2  md:w-1/3 mb-2">
                <div className="text-xl font-medium">
                  <h2>Company</h2>
                </div>
                <ul className="space-y-2">
                  <li>About Scissors</li>
                  <li>Careers</li>
                  <li>Partners</li>
                  <li>Press</li>
                  <li>Contact</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2  md:w-1/3 mb-2">
                <div className="text-xl font-medium">
                  <h2>Resources</h2>
                </div>
                <ul className="space-y-2">
                  <li>Blog</li>
                  <li>Resources</li>
                  <li>Developers</li>
                  <li>App Connectors</li>
                  <li>Support</li>
                  <li>Trust Center</li>
                  <li>Browser Extention</li>
                  <li>Mobile App</li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2  md:w-1/3 mb-2">
                <div className="text-xl font-medium">
                  <h2>Features</h2>
                </div>
                <ul className="space-y-2">
                  <li>Branded Links</li>
                  <li>Mobile Links</li>
                  <li>Campagin</li>
                  <li>Management &</li>
                  <li>Analytics</li>
                  <li>QR Codes generation</li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2  md:w-1/3 mb-2">
                <div className="text-xl font-medium">
                  <h2>Legal</h2>
                </div>
                <ul className="space-y-2">
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Terms Of Service</li>
                  <li>Acceptable Use Policy</li>
                  <li>Code of Conduct</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-end  text-gray-600">
        <p>Terms of Service |</p>
        <p>Security |</p>
        <p>Scissors 2023 </p>
      </div>
    </div>
  );
};

export default Footer;
