import Image from "next/image";
import uniLogo from "../../../assets/uniLogo.svg";
import heartIcon from "../../../assets/heart.svg";
import { Box, Grid } from "@mui/material";

export default function UniHeaderSection({university}) {

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 w-full sm:w-[80%] rounded-xl bg-white pl-[4%] pr-[4%]">
        <div className="col-span-12">
          <div className="flex">
            <div className="mt-[-50px] sm:mt-[-85px] uni-details-logo">
              <Image src={uniLogo} alt="uni-details-logo" layout="fixed" />
            </div>
            <div className="flex flex-col w-full ml-[4%]">
              <div className="flex justify-between flex-wrap md:flex-nowrap">
                <div className="flex flex-col mt-5">
                  <div className="font-semibold text-2xl text-[#000000]">
                    {university.name}
                  </div>
                  <div className=" text-[#363848]">
                    Specialty: Creative Design, Arts, Arts and Design
                  </div>
                </div>
                <div className="flex mt-4 md:mt-11 flex-nowrap">
                  <button className="h-7 bg-[#1E75FF] hover:bg-[#1E75FF] text-[#FAFAFB] px-6 py-1.5 items-center text-xs rounded font-semibold whitespace-nowrap hover:scale-95 transition-all duration-300 ">
                    Apply Now
                  </button>
                  <button
                    className={`w-7 h-7 ml-5 rounded-md transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D]`}
                  >
                    <Image src={heartIcon} alt="heart" width="12" height="12" />
                  </button>
                </div>
              </div>
              <div>
                <Box className="mt-6 mb-6">
                  <Grid container spacing={2}>
                    <Grid item>
                      <span className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem] whitespace-nowrap">
                        Location :{" "}
                        <span className="font-bold"> {university.location} </span>
                      </span>
                    </Grid>
                    <Grid item>
                      <span className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem] whitespace-nowrap">
                        University Type :
                        <span className="font-bold"> Public </span>
                      </span>
                    </Grid>
                    <Grid item>
                      <span className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem] whitespace-nowrap">
                        Campus Setting :{" "}
                        <span className="font-bold"> Major City </span>
                      </span>
                    </Grid>
                    <Grid item>
                      <span className="bg-[#F1F1F5] p-2 rounded-md text-[0.625rem] whitespace-nowrap">
                        Acceptance Rate :{" "}
                        <span className="font-bold"> 12 percent </span>
                      </span>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
