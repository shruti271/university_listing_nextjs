import ScholarshipDescription from "./scholarship-description";
import ScholarshipEligibility from "./scholarship-eligibility";
import ScholarshipSignup from "./scholarship-signup";

const ScholarshipContent = ({ scholarship }) => {
  return (
    <div className="grid grid-cols-12 mt-20 mx-[5%] lg:mx-[10%]">
      <div className="col-span-12">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-[100%] sm:w-[50%] lg:w-[100%] mr-10">
            <ScholarshipDescription scholarship={scholarship} />
            <ScholarshipEligibility />
          </div>
          <div className="w-[100%] sm:w-[50%] lg:w-[60%] h-[460px] sm:h-[650px] mt-10 sm:mt-0 p-6 bg-cover auth-cover rounded-xl animate__animated animate__zoomIn relative">
            <ScholarshipSignup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipContent;
