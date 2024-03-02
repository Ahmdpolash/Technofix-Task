import React from "react";
import { LuMoveRight } from "react-icons/lu";

const Collaborate = () => {
  return (
    <div className="py-3 md:py-7 lg:py-10">
      <h1 className="text-center text-[#050038] text-2xl md:text-3xl lg:text-5xl font-bold">
        Collaborate without <br /> constraints
      </h1>

      <div className="grid grid-cols-1 mt-4 md:mt-6 lg:mt-7 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <div className="border p-4">
          <h1 className="text-[#050038] text-xl font-bold">Free forever</h1>
          <p className="text-slate-600 pt-3 lg:pt-4">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </div>
        <div className="p-4 border">
          <h1 className="text-[#050038] text-xl font-bold">
            Easy integrations
          </h1>
          <p className="text-slate-600 pt-3 lg:pt-4">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our Marketplace .
          </p>
        </div>
        <div className="p-4 border">
          <h1 className="text-[#050038] text-xl font-bold">Security first</h1>
          <p className="text-slate-600 pt-3 lg:pt-4">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our Trust Center .
          </p>
        </div>
      </div>

      <div className="text-center pt-6 lg:pt-16 ">
        <button className=" font-normal  lg:gap-2 bg-[#4262FF] px-4 lg:px-5 py-2 text-[15px] lg:text-[17px] lg:py-[9px] rounded-full text-white">
          <div className="flex gap-1 items-center">
            Sign up free
            <span>
              <LuMoveRight className="mt-[2px] " />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Collaborate;
