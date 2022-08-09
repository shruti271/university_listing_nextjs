import Link from "next/link";
import FavoriteButton from "../../FavoriteButton";

const ScholarshipCard = () => {
  return (
    <div
      className="bg-colorWhite p-5 rounded-xl"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="relative text-[#0062FF] font-semibold text-xl">
          $1000
        </div>
        <FavoriteButton />
      </div>

      <h3 className="flex items-center gap-4 font-semibold mb-2">
        QCSEF General Scholarship
      </h3>
      <p className="text-[0.875rem] text-[#696974] mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna
      </p>
      <div className="text-[#000000] font-semibold text-sm mb-2">
        <span className="text-[#696974]">Deadline: </span> June 24, 2022
      </div>
      <div className="text-[#696974] font-semibold text-sm mb-5">
        One time award
      </div>

      <div>
        <Link href="" passHref>
          <button
            type="button"
            class="w-full  border border-[#0364FF] text-[#0364FF] rounded-2xl font-semibold hover:scale-95 transition-all duration-300 text-sm md:text-base !rounded-md text-[0.75rem] md:text-[0.75rem] !p-2"
          >
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;
