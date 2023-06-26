import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { useState } from "react";

const PricingPage = () => {
  return (
    <div className="px-10 py-5">
      <div className="text-center space-y-2 w-full">
        <h2 className="text-3xl font-bold">
          A <span className="text-blue-700"> perfect price </span>for your
          needs.{" "}
        </h2>
        <p className="">
          From catering for your personal, business, event, social needs, you
          can be rest assured we have you in mind in our pricing
        </p>
      </div>
      <div className="flex justify-center mt-32">
        <div className="grid gap-4 md:gap-0 md:grid-cols-3">
          <div className="border row-span-2 px-10 py-6">
            <p>Basic</p>
            <h3 className="text-2xl font-semibold">Free</h3>
            <p className="text-lg">Free plan for all users</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Unlimited URL shortening
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Basic Link Analytics
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Customizable Short Links
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Standard Support
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Ad-supported
              </li>
            </ul>
          </div>

          <div className="border px-10 py-6 bg-[#1E3448] row-span-6 text-white hover:scale-125 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1">
            <p>Professional</p>
            <h3 className="text-2xl font-semibold">$15/month</h3>
            <p className="text-lg">ideal for business creators</p>
            <ul className="mt-4 space-y-10">
              <li className="flex items-center">
                <BsCheck2Circle className="text-white mr-2" />
                Enhanced Link Analytics
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-white mr-2" />
                Custom Branded Domains
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-white mr-2" />
                Priority Support
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-white mr-2" />
                Ad-free Experience
              </li>
            </ul>
          </div>
          <div className="row-span-2 border px-10 py-6 cursor-pointer">
            <p>Teams</p>
            <h3 className="text-2xl font-semibold">$25/month</h3>
            <div className="text-lg">Share with up to 10 users</div>
            <ul className="mt-4">
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Team Collaborations
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                User Roles and Permissions
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Enchanced Security
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                API Access
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-blue-700 mr-2" />
                Dedicated Account Manager
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-20">
        <button className="text-blue-700 px-5 py-3 border rounded-2xl hover:bg-slate-100">Get Custom Pricing</button>
        <button className="bg-blue-700 px-5 py-3 rounded-2xl text-white hover:bg-blue-600">Select Pricing</button>
      </div>
    </div>
  );
};

export default PricingPage;
