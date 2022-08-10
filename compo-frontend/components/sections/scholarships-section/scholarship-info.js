import AmountIcon from "../../svg/AmountIcon";
import AwardIcon from "../../svg/AwardIcon";
import CalenderIcon from "../../svg/CalenderIcon";

const ScholarshipInfo = ({ scholarship }) => {
  return (
    <div className="-mt-[35px] sm:-mt-[50px] container w-full md:w-[70%] lg:w-[55%]">
      <div className=" flex items-center justify-between">
        <div className="flex items-center justify-center flex-col">
          <div className="rounded-full bg-[#EB6B09] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center">
            <AmountIcon />
          </div>
          <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-lg sm:text-xl	 text-center sm:flex items-center ">
            <div className="mr-1">Amount:</div>
            <div>$500</div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="rounded-full bg-[#EB6B09] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center ">
            <CalenderIcon />
          </div>
          <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-lg sm:text-xl text-center sm:flex items-center ">
            <div className="mr-1">Deadline:</div>
            <div>{scholarship.application_deadline}</div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="rounded-full bg-[#EB6B09]  w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center">
            <AwardIcon />
          </div>
          <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-lg sm:text-xl  text-center sm:flex items-center ">
            <div className="mr-1">Award:</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipInfo;
