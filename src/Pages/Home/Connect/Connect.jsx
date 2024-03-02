import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import image from "../../../assets/work/connect.png";
const Connect = () => {
  return (
    <div className="py-3 md:py-5 lg:py-7 lg:mt-">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <div>
          <img className="w-[500px]" src={image} alt="work-image" />
        </div>
        <div className="space-y-3 ">
          <h1 className=" text-[#050038] text-2xl md:text-3xl lg:text-5xl font-bold">
            Connect your tools, <br /> close your tabs
          </h1>
          <p className="text-slate-500 text-[17px] lg:w-[80%]">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <button className="flex items-center gap-2 py-2 underline text-blue-600 ">
            Learn more <FaArrowRight className="text-[13px] mt-1" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
