import React from "react";
import { LuMoveRight } from "react-icons/lu";
import banner from "../../../assets/Banner/banner.png";
import logo1 from "../../../assets/Banner/Frame.png";
import logo2 from "../../../assets/Banner/svg (1).png";
import logo3 from "../../../assets/Banner/svg.png";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <div className="lg:h-[vh] overflow-hidden pb-4 w-full flex justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-4 lg:gap-10 justify-btween mt-5 lg:mt-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:w-[40%] mt-6 lg:mt-0 space-y-3"
        >
          <h1 className="text-[#050038] w-[%] text-3xl font-bold lg:text-6xl">
            Take ideas from better to best
          </h1>
          <p className="text-slate-700 my-2 mb-2 text-[17px]">
            Miro is your team's visual platform to connect <br /> collaborate,
            and create — together.
          </p>
          <div className="space-y-3 my-2 pt-3">
            <input
              className="w-full rounded-full border border-slate-400 outline-none focus:border-blue-500 py-2 px-4"
              type="text"
              placeholder="Enter your work email"
            />
            <button className=" flex items-center font-normal w-full justify-center gap-1 lg:gap-2  bg-[#4262FF] px-4 lg:px-5 py-2 text-[15px] lg:text-[17px] lg:py-[9px] rounded-full text-white">
              Sign up free <LuMoveRight className="mt-[2px] " />
            </button>
            <p className="text-slate-500 text-[16px]">
              Collaborate with your team within minutes
            </p>
          </div>
          <div className="py-8">
            <div className="bg-gray-200  lg:w-[90%]  rounded-md ">
              <div className="flex items-center gap-3 px-4 py-2">
                <div>
                  <div className="flex items-center gap-">
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStarHalf className="text-[#ff9d48] text-[24px]" />
                  </div>
                  <h3 className="text-[14px] font-semibold">
                    Based on 5149+ reviews:{" "}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <img className="w-[25px]" src={logo2} alt="brand_logo" />
                  <img className="w-[75px]" src={logo3} alt="brand_logo" />
                  <img className="w-[75px]" src={logo1} alt="brand_logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:ml-0 flex- "
        >
          <img
            src={banner}
            className=" w-full md:w-full 2xl:w-ful lg:w-[720px] lg:h-[450px]"
            alt="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
