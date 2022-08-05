import { Rating } from "@mui/material";
import WaveElement from "../../svg/WaveElement";
import StarIcon from "@mui/icons-material/Star";

const ProgramHeader = () => {
  return (
    <div className="pb-10 lg:pb-20   relative mt-32 ">
      <div className="mt-[130px] grid grid-cols-8 gap-8 ">
        <div className="col-span-8  pr-0 lg:col-span-8 lg:pr-10">
          <div className="font-bold text-2xl sm:text-3xl text-[#000000]">
            Art/Art Studies, General
          </div>

          <div className="font-normal text-base text-[#000000] mt-5">
            “Art” covers a broad range of topics, from landscape architecture to
            art education, from fashion design to game and interactive media
            design. In general, arts majors prepare individuals to succeed as
            creative artists. The first step in choosing what type of art major
            to pursue is figuring out where you want to end up. Broad categories
            include fashion/textiles, graphic design, spatial design, 3D product
            design, digital/multimedia, photography, fine art, and
            arranging/display. Majoring in art can also translate to
            organization and people management, such as becoming an Art
            Therapist, Private Art Instructor, or Artist Agent. Art degrees are
            offered at every level, and many can be completed online.
          </div>

          <div className="mt-10 flex items-center justify-start flex-wrap gap-8">
            <div className="flex items-center">
              <Rating
                name="text-feedback"
                value="5"
                readOnly
                precision={0.5}
                sx={{ color: "#FFCC00" }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <div className="ml-2 text-[#000000]">
                <b>5</b> (231)
              </div>
            </div>

            <div className="flex items-center gap-4">
              <li className="text-[#000000]">14 Users Enrolled</li>
              <li className="text-[#000000]">English</li>
            </div>
          </div>
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

export default ProgramHeader;
