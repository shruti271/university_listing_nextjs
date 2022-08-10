import ProfileIcon from "../../../assets/profile.png";
import Ranking from "../../../assets/Ranking.svg";
import heartIcon from "../../../assets/heart.svg";
import Image from "next/image";

import { CircularProgressWithLabel } from "../../core/CustomMUIComponents";

const Profile = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] p-5 container">
      <div className="flex items-center justify-center">
        <CircularProgressWithLabel
          profile={<Image src={ProfileIcon} />}
          value={80}
          size={100}
          color="#8743DF"
          strokeLinecap="round"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <p className="text-[#171725] font-semibold text-lg">Ali Aslam</p>
        <p className="text-[#696974] leading-[0.1px] font-normal text-sm mt-2">
          Bachelor’s of Computer Science
        </p>
        <p className="text-[#979797] font-normal text-xs mt-2">
          California Institue of Arts
        </p>
      </div>
      <div className="flex items-center justify-center mt-4 border-b border-[#F2F2F2] pb-4">
        <Image src={Ranking} />
      </div>
      <div className="flex flex-col gap-2  mt-5 border-b border-[#F2F2F2] pb-5">
        <div className="flex items-center justify-between container mx-auto">
          <p className="text-[#92929D] font-normal text-sm">
            Univeristies who viwed you
          </p>
          <p className="text-[#0062FF] font-semibold text-sm">25</p>
        </div>
        <div className="flex items-center justify-between container mx-auto">
          <p className="text-[#92929D] font-normal text-sm">
            Scholarships applied
          </p>
          <p className="text-[#0062FF] font-semibold text-sm">56</p>
        </div>
      </div>
      <div className="flex gap-3 items-center mt-5 ">
        <button
          className={`w-7 h-7  rounded-md transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D]`}
        >
          <Image src={heartIcon} alt="heart" width="12" height="12" />
        </button>
        <p className="text-[#92929D] font-normal text-sm">Your saved items</p>
      </div>
    </div>
  );
};

export default Profile;
