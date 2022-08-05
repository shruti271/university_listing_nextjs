import Image from "next/image";

import MedalIcon from "../../../assets/Medal.svg";
import UpgradeIcon from "../../../assets/upgrade-icon.svg";

const UpgradeAccount = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] p-5 mt-5 container mx-auto">
      <div className="flex items-center justify-between">
        <div className="font-bold text-lg text-[#374557] upgrade-cover relative">
          <Image src={UpgradeIcon} />
          Upgrade your Account to Pro
        </div>
        <div className="">
          <Image src={MedalIcon} />
        </div>
      </div>
      <div className="mt-2 text-sm font-normal text-[#A098AE]">
        Upgrade to premium to get premium features
      </div>
      <div className="mt-8">
        <button
          className="bg-[#0364FF] hover:bg-[#0364FF] text-[#FFFFFF] px-8 py-3  rounded-xl tracking-wide
                  font-semibold focus:outline-none focus:shadow-outline 
                  shadow-lg flex items-center justify-center"
        >
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default UpgradeAccount;
