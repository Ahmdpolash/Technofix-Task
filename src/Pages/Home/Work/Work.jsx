import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import image from "../../../assets/work/work.png";
const Work = () => {
  return (
    <div className="py-3 overflow-hidden md:py-5 lg:py-7 lg:mt-">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <div
          data-aos="slide-right"
          data-aos-easing="ease-in"
          className=" space-y-1 lg:space-y-3 order-2 lg:order-1"
        >
          <h1 className=" text-[#050038] text-2xl md:text-3xl lg:text-5xl font-bold">
            Work together, <br /> wherever you work
          </h1>
          <p className="text-slate-500 text-[17px]">
            In the office, remote, or a mix of the two, with Miro, <br /> your
            team can connect, collaborate, and co-create in <br /> one space no
            matter where you are.
          </p>
          <button className="flex items-center gap-2 py-2 underline text-blue-600 ">
            Learn more <FaArrowRight className="text-[13px] mt-1" />{" "}
          </button>
        </div>

        <div
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="order-1 lg:order-2 lg:mx-0 md:mx-auto"
        >
          <img src={image} alt="work-image" />
        </div>
      </div>
    </div>
  );
};

export default Work;
