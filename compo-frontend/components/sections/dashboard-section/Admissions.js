import MoreVertIcon from "@mui/icons-material/MoreVert";

import BoltTwoToneIcon from "@mui/icons-material/BoltTwoTone";
import { CircularProgressWithLabel } from "../../core/CustomMUIComponents";

const Admissions = () => {
  const UpcomingUni = [
    { name: "Dubai, UAE", uniName: "Univeristy of Dubai", val: 75 },
    { name: "Orlando, FL", uniName: "Univeristy of Central Florida", val: 35 },
    {
      name: "Yoast Esac",
      uniName: "University of Washignton -Settle Campus",
      val: 95,
    },
  ];

  return (
    <div className="container mx-auto col-span-12 sm:col-span-6 lg:col-span-12">
      <div
        className="bg-[#FEFEFE]  rounded-tl-[20px] rounded-tr-[20px] text-[#000000] text-xl font-semibold p-5"
        style={{ boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)" }}
      >
        Upcoming Admissions
      </div>
      <div className="rounded-bl-[20px] bg-[#FFFFFF]  rounded-br-[20px] max-h-[425px] overflow-y-auto ">
        {UpcomingUni?.map((itm) => (
          <div className="p-5 border-b " key={itm.name}>
            <p className="text-[#2953E8] font-semibold text-sm tracking-[-0.24px]">
              {itm?.name}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-[#000000] font-semibold text-base tracking-[-0.24px]">
                {itm?.uniName}
              </p>
              <MoreVertIcon />
            </div>
            <div className="text-[0.75rem] mt-3 flex items-center gap-2">
              <span className="text-colorBlack pr-2 border-r-2 border-colorBlack capitalize">
                Public
              </span>
              <span className="text-[#92929D]">
                <span className="text-colorBlack mr-1">{itm?.val}%</span>
                Acceptance rate
              </span>
            </div>
            <div className="flex items-center justify-start gap-2 mt-6">
              <div className="flex items-center justify-center">
                <CircularProgressWithLabel
                  profile={
                    <BoltTwoToneIcon
                      sx={{
                        color: "#2953E8",
                        height: "35px",
                        width: "35px",
                      }}
                    />
                  }
                  value={itm?.val}
                  size={60}
                  color="#2953E8"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#A0A0A0] font-normal text-base tracking-[-0.24px]">
                  Deadline
                </p>
                <p className="text-[#000000] font-semibold text-base tracking-[-0.24px]">
                  Tuesday, Sep 29th 2022
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admissions;
