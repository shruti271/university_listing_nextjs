import EastIcon from "@mui/icons-material/East";

const ScholarshipSignup = () => {
  return (
    <div className="absolute w-[95%] lg:w-[75%] left-[50%] bottom-[25px] sm:bottom-[15px] translate-x-[-50%]">
      <div className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl text-center !leading-10">
        Start applying today!
      </div>
      <div className="text-[#FFFFFF] text-center mt-2 sm:m-4 text-lg	 sm:text-lg	font-normal	!leading-7">
        Create a free account and automatically be entered to win our monthly
        $1,000 Easy Money Scholarship
      </div>
      <div className="flex justify-center text-center mt-2 sm:m-4">
        <button
          type="button"
          className="bg-[#0364FF] hover:bg-[#0364FF] text-gray-100 p-2 sm:p-4 w-full rounded-xl tracking-wide
                                  font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg 
                                  flex items-center justify-center"
        >
          Sign up Now <EastIcon className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ScholarshipSignup;
