import { Avatar } from "@mui/material";

import { CustomAvatarGroup } from "../../core/CustomMUIComponents";

const Majors = () => {
  return (
    <div className="container mx-auto mt-6 sm:mt-0 lg:mt-6 col-span-12 sm:col-span-6 lg:col-span-12">
      <div className="bg-[#FEFEFE]  rounded-tl-[20px] rounded-tr-[20px] text-[#000000] text-xl font-semibold p-5">
        Majors for you
      </div>
      <div className="rounded-bl-[20px] bg-[#FFFFFF]  rounded-br-[20px] max-h-[425px] overflow-y-auto ">
        <div className="p-3 ">
          {[0, 1, 2]?.map((itm) => (
            <div className="grid grid-cols-4 gap-3 pb-7" key={itm}>
              <div className="col-span-1">
                <Avatar
                  sx={{
                    bgcolor: "#FC5A5A",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="col-span-3 gap-1">
                <p className="text-[#000000] font-semibold text-md leading-[21px] tracking-[0.1px]">
                  Arts/Art Studies, General
                </p>
                <p className="text-[#000000] font-normal text-sm leading-[21px] ">
                  Multiple Univerities
                </p>
                <div className="flex items-center justify-start flex-wrap gap-2">
                  <div className="text-[#000000] text-xs font-normal">
                    Arts/General
                  </div>
                  <li className="text-[#000000] text-xs font-normal">
                    15,321 Total Members
                  </li>
                </div>

                <div className="mt-3 flex items-center justify-start gap-1">
                  <CustomAvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                    <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                    <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                    <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                    <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                    <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                    <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                  </CustomAvatarGroup>
                  <div className="text-[#000000] text-xs font-normal">
                    50 Studetns enrolled
                  </div>
                </div>

                <div className="mt-4 flex gap-2 flex-wrap">
                  <button
                    className="bg-[#0364FF] hover:bg-[#0364FF] text-[#FFFFFF] px-6 py-2  rounded-full tracking-wide
                                  font-semibold focus:outline-none focus:shadow-outline 
                                  shadow-lg flex items-center justify-center text-center"
                  >
                    Enroll
                  </button>
                  <button
                    className="bg-[#292932] hover:bg-[#292932] text-[#FFFFFF] px-6 py-2  rounded-full tracking-wide
                        font-semibold focus:outline-none focus:shadow-outline 
                        shadow-lg flex items-center justify-center text-center"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Majors;
