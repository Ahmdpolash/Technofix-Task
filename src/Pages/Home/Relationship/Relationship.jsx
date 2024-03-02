import React from "react";
import section from "../../../assets/work/section.png";
const Relationship = () => {
  return (
    <div className='"py-3 overflow-hidden md:py-5 lg:py-5'>
      <div
        data-aos="fade-bottom"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <img className="w-full" src={section} alt="section image" />
      </div>
    </div>
  );
};

export default Relationship;
