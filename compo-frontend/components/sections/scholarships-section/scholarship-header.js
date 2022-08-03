import Image from "next/image";
import WaveElement from "../../svg/WaveElement";
import heartIcon from "../../../assets/heart.svg";

const ScholarshipHeader = ({ scholarship }) => {
  return (
    <div className="pb-20 md:pb-28 container mx-auto relative ">
      <div className="mt-[112px]">
        <div className="flex items-center justify-center text-center text-[#544E5D] ">
          Columbus Foundation
        </div>
        <div className="flex items-center justify-center mt-4 text-[#06040A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full md:w-[75%] font-semibold	mx-auto text-center !leading-[40px] sm:!leading-[60px] lg:!leading-[80px]">
          {scholarship.name}
        </div>
        <div className="items-center mt-4 justify-center flex gap-8">
          <button className="bg-[#1E75FF] text-[#FAFAFB] px-8 py-3 items-center text-xs rounded-[6px] font-semibold whitespace-nowrap ">
            Apply Now
          </button>
          <button
            className={`w-10 h-10 rounded-md transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D]`}
          >
            <Image src={heartIcon} alt="heart" width="12" height="12" />
          </button>
        </div>
      </div>
      {/* <div className="w-full  h-full left-[0%] bottom-[-5%] translate-x-[-10%]  absolute -z-10 rotate-6">
        <WaveElement />
      </div>
      <div className="w-full  h-full left-[10%] bottom-[70%] translate-x-[-50%] absolute -z-10 -rotate-6">
        <WaveElement />
      </div> */}
    </div>
  );
};

export default ScholarshipHeader;
