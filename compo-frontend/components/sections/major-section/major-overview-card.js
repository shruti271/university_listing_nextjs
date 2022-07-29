import { Typography } from "@mui/material";
import Image from "next/image";
import majorImage from "../../../assets/major-img.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

const MajorOverviewCard = () => {
  const CourseBenefits = [
    { icon: AccessTimeIcon, label: "Anytime, Anywhere" },
    { icon: FileDownloadOutlinedIcon, label: " Downloadable Resources" },
    { icon: VpnKeyOutlinedIcon, label: "Full Lifetime Access" },
  ];

  return (
    <>
      <div className="major ">
        <Image src={majorImage} alt="majorImage" />
      </div>
      <div className="font-bold text-xl text-[#1C1D1F] mt-2 	leading-[140%]">
        Design & Development
      </div>
      <div className="font-normal line-through text-sm text-[#C2C2C2] mt-2">
        University of Dubai
      </div>
      <div className="mt-5 ">
        <button
          type="button"
          className="bg-[#0038FF] hover:bg-[#0038FF] text-[#FFFFFF] p-2 w-full rounded tracking-wide
                    font-semibold focus:outline-none focus:shadow-outline shadow-lg text-sm leading-[140%]"
        >
          Enroll Now
        </button>
      </div>
      <div className="mt-7">
        <div className="font-bold text-[#1C1D1F] text-lg 	leading-[140%]">
          This Course Includes
        </div>
        <div className="flex flex-col gap-2 mt-5">
          {CourseBenefits?.map((item) => (
            <Typography className="flex items-center text-[#757575]  font-normal text-base	">
              <item.icon
                fontSize="inherit"
                sx={{ marginRight: 3 }}
                className="text-[#0038FF]"
              />
              {item.label}
            </Typography>
          ))}
        </div>
      </div>
      <div className="mt-8 border-b pb-9">
        <div className="font-bold text-[#1C1D1F] text-lg">Tags</div>
        <ul className="flex items-center justify-start flex-wrap gap-2 mt-4">
          {["3D", "3D Modelling", "Blender App"]?.map((item) => (
            <li className="text-[#000000] font-normal bg-[#e0e0e0] rounded px-3 py-2 text-sm	leading-[140%]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button
          className="bg-[#FFFFFF] w-full hover:bg-[#FFFFFF] text-[#1C1D1F] border-[#e0e0e0] border  p-2 rounded tracking-wide
                     font-bold focus:outline-none focus:shadow-outline text-sm leading-[140%]  "
        >
          Share
        </button>
      </div>
    </>
  );
};

export default MajorOverviewCard;
