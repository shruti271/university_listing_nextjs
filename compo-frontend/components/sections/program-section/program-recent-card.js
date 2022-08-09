import { Rating } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

const ProgramRecentCard = ({ itm }) => {
  return (
    <>
      <div className="grid grid-cols-3 border mt-8">
        <div className="col-span-3 sm:col-span-1 major">
          <Image src={itm} alt="majorImage" />
        </div>
        <div className="col-span-3 sm:col-span-2 p-4">
          <div className="font-normal text-[#1C1D1F] text-base">
            Adobe PhotoShop from scratch for Beginner
          </div>
          <div className="flex items-center mt-3 gap-2 justify-start flex-wrap">
            <p className="text-[#757575] font-normal text-base">Last Update</p>
            <p className="text-[#1C1D1F] font-normal text-base">
              7 September 2021
            </p>
          </div>
          <div className="flex items-center gap-4 mt-3 justify-start flex-wrap">
            <Rating
              name="text-feedback"
              value="5"
              readOnly
              precision={0.5}
              sx={{color:'#FFCC00'}}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <li className="text-[#1C1D1F] font-normal text-base">
              14 University offerings
            </li>
          </div>
          <div className="mt-4 lg:mt-7">
            <button
              type="button"
              className="bg-[#0038FF] hover:bg-[#0038FF] text-[#FFFFFF] px-5 py-2 rounded tracking-wide
                            font-bold  focus:outline-none focus:shadow-outline shadow-lg
                             flex items-center justify-center w-full sm:w-auto text-sm	leading-[140%]"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramRecentCard;
