import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const ScholarshipEligibility = () => {
  const EligibleMajors = [
    "Funeral Service and Mortuary Science",
    "Cosmetology and Related Personal Grooming Services",
    "Culinary Arts and Related Services",
    "Culinary",
    "Entertainment",
    "Personal Services",
  ];
  const EnrollmentLevel = [
    "College senior",
    "College freshman",
    "College junior",
    "College sophomore",
  ];

  return (
    <div className="mt-6 bg-[#FFFFFF] rounded-lg">
      <p className="text-[#000000] text-xl font-semibold">Eligibility</p>

      <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-7 !mx-0 w-[100%] sm:w-[200%] lg:w-[100%]">
        <div className="col-span-3 sm:col-span-2 bg-[#F9F9FA] flex items-center justify-start lg:justify-center rounded-lg p-2 text-[#06040A] font-semibold text-md	leading-[32px]">
          Accredited University Required:Yes
        </div>
        <div className="col-span-3 sm:col-span-1 rounded-lg bg-[#F9F9FA] flex items-center justify-start lg:justify-center p-2 text-[#06040A] font-semibold text-md	leading-[32px]">
          GPA Required: 2
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 !mx-0 mt-8 w-[100%] sm:w-[200%] lg:w-[100%]">
        <div className="col-span-3 sm:col-span-2 lg:col-span-2 text-[#06040A]">
          <p className="mb-4 font-semibold text-md leading-[32px]">
            Eligible Majors
          </p>
          {EligibleMajors?.map((itm) => (
            <div
              className="flex items-center text-[#06040A] font-normal text-md  mb-3 "
              key={itm}
            >
              <CheckRoundedIcon
                fontSize="inherit"
                sx={{ marginRight: 2 }}
                className="text-[#2DCA72]"
              />
              <p className="p-1 border-b border-[#EBECF0] w-full">{itm}</p>
            </div>
          ))}
        </div>
        <div className="col-span-3 sm:col-span-1 lg:col-span-1  text-[#06040A]">
          <p className="mb-4 font-semibold text-md leading-[32px]">
            Enrollment Level
          </p>
          {EnrollmentLevel?.map((itm) => (
            <div
              className="flex items-center text-[#06040A]  font-normal text-md mb-3"
              key={itm}
            >
              <CheckRoundedIcon
                fontSize="inherit"
                sx={{ marginRight: 2 }}
                className="text-[#2DCA72]"
              />
              <p className="p-1 border-b border-[#EBECF0] w-full">{itm}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:mt-10 lg:mt-20 lg:!mx-10 w-[100%] sm:w-[200%] lg:w-[100%]">
        <button className="col-span-12 sm:col-span-6 bg-[#0364FF]  text-[#F9F9FA]  py-3  items-center text-xs font-semibold whitespace-nowrap rounded-[14px]">
          Apply Now
        </button>
        <button className="col-span-12 sm:col-span-4 bg-[#FFFFFF] mt-1 sm:mt-0  hover:bg-[#FFFFFF] text-[#544E5D] border-[#544E5D] border  py-3 items-center text-xs rounded-[14px] font-semibold whitespace-nowrap hover:scale-95 transition-all duration-300 ">
          Share to Friends
        </button>
      </div>
    </div>
  );
};

export default ScholarshipEligibility;
