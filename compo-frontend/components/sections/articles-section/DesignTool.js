import Image from "next/image";
import React from "react";
import DesignToolImage from "../../../assets/designTool.png";

const designTool = () => {
  return (
      <div className="flex py-10">
        <div className="flex flex-col shrink-[2]">
          <div className="flex">
            <div className="bg-[#EBF2FE] rounded-md text-[#232E52] font-black text-sm leading-[120%] text-center uppercase px-3 py-2 whitespace-nowrap">
              Design tools
            </div>
            <div className="rounded-md text-[#232E52] font-medium text-sm leading-[120%] text-center uppercase px-3 py-2 whitespace-nowrap">
              AUGust 13, 2021
            </div>
          </div>
          <div className="relative w-full h-[200px] flex sm:hidden mt-4">
            <Image src={DesignToolImage} layout="fill" className="object-cover rounded-md" />
          </div>
          <div className="text-[#232E52] font-bold text-2xl leading-[130%] mt-6">
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers cvcvdsvds dfdfdf dfdsfsdf sfdsfdsf sfdsfdsf sdfsdfdfsdf sfdsfdfdfv fdsfdsfdsfdsf
          </div>
          <div className="text-[#232E52] font-normal text-base leading-[150%] mt-3">
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </div>
        </div>
        <div className="relative w-[300px] h-[200px] sm:flex hidden ml-[5%]">
          <Image src={DesignToolImage} layout="fill" className="object-cover rounded-md" />
        </div>
      </div>
  );
};

export default designTool;
