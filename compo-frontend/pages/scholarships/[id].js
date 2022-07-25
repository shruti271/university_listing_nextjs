import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";
import Image from "next/image";
import heartIcon from "../../assets/heart.svg";
import AmountIcon from "../../assets/amount-icon.svg";
import CalenderIcon from "../../assets/calender-icon.svg";
import AwardIcon from "../../assets/award-icon.svg";

import EastIcon from "@mui/icons-material/East";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import WaveElement from "../../components/svg/WaveElement";

const ScholarshipDetails = ({ scholarship }) => {
  console.log("scholarship::::::", scholarship);

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
    <>
      <div className="pb-20">
        <Header />

        <div className="pb-20 md:pb-28 container mx-auto relative ">
          <div className="mt-[112px]">
            <div className="flex items-center justify-center text-center text-[#544E5D] ">
              Columbus Foundation
            </div>
            <div className="flex items-center justify-center mt-4 text-[#06040A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full md:w-[75%] font-semibold	mx-auto text-center !leading-[40px] sm:!leading-[60px] lg:!leading-[80px]">
              {scholarship.name}
            </div>
            <div className="items-center mt-4 justify-center flex gap-8">
              <button className="bg-[#1E75FF] text-[#FAFAFB] px-8 py-3 items-center text-xs rounded-[6px] font-semibold whitespace-nowrap ">
                Apply Now
              </button>
              <button
                className={`w-10 h-10 rounded-md transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D]`}
              >
                <Image src={heartIcon} alt="heart" width="12" height="12" />
              </button>
            </div>
          </div>
          <div className="w-full  h-full left-[0%] bottom-[-5%] translate-x-[-10%]  absolute -z-10 rotate-6">
            <WaveElement />
          </div>
          <div className="w-full  h-full left-[10%] bottom-[70%] translate-x-[-50%] absolute -z-10 -rotate-6">
            <WaveElement />
          </div>
        </div>
        <div className="-mt-[35px] sm:-mt-[50px] container mx-auto w-full md:w-[70%] lg:w-[55%]">
          <div className=" flex items-center justify-between container mx-auto">
            <div className="flex items-center justify-center flex-col">
              <div className="rounded-full bg-[#EB6B09] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center">
                <Image src={AmountIcon} alt="heart" />
              </div>
              <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-lg sm:text-xl lg:text-2xl	 text-center sm:flex items-center ">
                <div>Amount:</div>
                <div>$500</div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col">
              <div className="rounded-full bg-[#EB6B09] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center ">
                <Image src={CalenderIcon} alt="heart" />
              </div>
              <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-lg sm:text-xl lg:text-2xl text-center sm:flex items-center ">
                <div>Deadline:</div>
                <div>{scholarship.application_deadline}</div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col">
              <div className="rounded-full bg-[#EB6B09]  w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center">
                <Image src={AwardIcon} alt="heart" />
              </div>
              <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-lg sm:text-xl lg:text-2xl text-center sm:flex items-center ">
                <div>Award:</div>
                <div>1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-20 mx-[5%] lg:mx-[10%]">
          <div className="col-span-12">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col w-[100%] sm:w-[50%] md:w-[60%] mr-10">
                <div className="bg-[#FFFFFF] rounded-lg min-h-auto h-auto sm:min-h-[650px] md:min-h-[650px] lg:min-h-auto ">
                  <p className="text-[#000000] text-xl font-semibold">Brief</p>
                  <p className="text-[#06040A] font-normal text-lg mt-2  ">
                    {scholarship.description}
                  </p>
                </div>

                <div className="mt-6 bg-[#FFFFFF] rounded-lg">
                  <p className="text-[#000000] text-xl font-semibold">
                    Eligibility
                  </p>

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
                          <p className="p-1 border-b border-[#EBECF0] w-full">
                            {itm}
                          </p>
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
                          <p className="p-1 border-b border-[#EBECF0] w-full">
                            {itm}
                          </p>
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
              </div>
              <div className="w-[100%] sm:w-[50%] md:w-[60%] h-[460px] sm:h-[650px] mt-10 sm:mt-0 p-6 bg-cover auth-cover rounded-xl animate__animated animate__zoomIn relative">
                <div className="absolute w-[95%] lg:w-[75%] left-[50%] bottom-[25px] sm:bottom-[15px] translate-x-[-50%]">
                  <div className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl text-center !leading-10">
                    Start applying today!
                  </div>
                  <div className="text-[#FFFFFF] text-center mt-2 sm:m-4 text-lg	 sm:text-lg	font-normal	!leading-7">
                    Create a free account and automatically be entered to win
                    our monthly $1,000 Easy Money Scholarship
                  </div>
                  <div className="flex justify-center text-center mt-2 sm:m-4">
                    <button
                      type="button"
                      className="bg-[#0364FF] hover:bg-[#0364FF] text-gray-100 p-2 sm:p-4 w-full rounded-xl tracking-wide
                                                        font-semibold font-display focus:outline-none focus:shadow-outline 
                                                        shadow-lg flex items-center justify-center"
                    >
                      Sign up Now <EastIcon className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get scholarships
  const res = await fetch("https://api.composite.digital/v1/scholarships/");
  const scholarships = await res.json();

  // Get the paths we want to pre-render based on scholarships
  const paths = scholarships.map((scholarship) => ({
    params: { id: scholarship.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the scholarship `id`.
  const res = await fetch(
    `https://api.composite.digital/v1/scholarships/${params.id}`
  );
  const scholarship = await res.json();

  // Pass scholarship data to the page via props
  return { props: { scholarship } };
}

export default ScholarshipDetails;
