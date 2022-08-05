import Image from "next/image";
import React from "react";
import DesignToolImage from "../../../assets/designTool.png";

const designTool = () => {
  return (
    <div
      className="bg-colorWhite px-6 py-10 rounded-xl"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8 py-2">
          <div className="flex">
            <div className="bg-[#EBF2FE] rounded-md text-[#232E52] font-black text-sm leading-[120%] text-center uppercase px-3 py-2">
              Design tools
            </div>
            <div className="bg-[#FFFFFF] rounded-md text-[#232E52] font-medium text-sm leading-[120%] text-center uppercase px-3 py-2">
              AUGust 13, 2021
            </div>
          </div>

          <div className="text-[#232E52] font-bold text-2xl leading-[130%] mt-6">
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </div>

          <div className="text-[#232E52] font-normal text-base leading-[150%] mt-3">
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </div>
        </div>
        <div className="col-span-4 design-tool-cover">
          <Image src={DesignToolImage} />
        </div>
      </div>
    </div>
  );
};

export default designTool;
