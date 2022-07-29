import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";
import HeroSection from "../../components/university-sections/hero-section/HeroSection";
import Image from "next/image";
import uniLogo from "../../assets/uniLogo.svg";
import heartIcon from "../../assets/heart.svg";
import AmountIcon from "../../assets/amount-icon.svg";
import CalenderIcon from "../../assets/calender-icon.svg";
import AwardIcon from "../../assets/award-icon.svg";

import CoverImage from "../../assets/login-cover.png";
import EastIcon from "@mui/icons-material/East";

import DoneIcon from "@mui/icons-material/Done";
import { Typography } from "@mui/material";
import WaveElement from "../../components/svg/WaveElement";

export default function Scholarships() {
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
              Jimmy West Employee Scholarship Fund
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
              <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-md md:text-lg lg:text-xl text-center sm:flex items-center ">
                <div>Amount:</div>
                <div>$500</div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col">
              <div className="rounded-full bg-[#EB6B09] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center ">
                <Image src={CalenderIcon} alt="heart" />
              </div>
              <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-md md:text-lg lg:text-xl text-center sm:flex items-center ">
                <div>Deadline:</div>
                <div>July 12, 2022</div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col">
              <div className="rounded-full bg-[#EB6B09]  w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] flex items-center justify-center">
                <Image src={AwardIcon} alt="heart" />
              </div>
              <div className="text-[#06040A] mt-5 sm:mt-10 font-medium text-md md:text-lg lg:text-xl text-center sm:flex items-center ">
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
                  <div className="bg-[#FFFFFF] rounded-lg">
                    <p className="text-[#000000] text-xl font-semibold">
                      Brief
                    </p>
                    <p className="text-[#06040A] font-normal text-sm mt-2 tracking-wide">
                      This scholarship is for second season employees and
                      children of second season employees of the Columbus
                      Country Club in Columbus, Ohio. Applicants must be
                      enrolled at least part-time at a public or private
                      non-profit college, university, or two-year school.
                      Preference will be given to employees who are pursuing an
                      educational curriculum in hospitality/culinary/club
                      management.
                    </p>
                    <p className="text-[#06040A] font-normal text-sm mt-8 mb-2 tracking-wide">
                      "Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                  </div>

                  <div className="mt-6 bg-[#FFFFFF] rounded-lg">
                    <p className="text-[#000000] text-xl font-semibold">
                      Eligibility
                    </p>

                    <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-7 !mx-0 w-[100%] sm:w-[200%] lg:w-[100%]">
                      <div className="col-span-3 sm:col-span-2 bg-[#F9F9FA] flex items-center justify-start lg:justify-center rounded-lg p-2 text-[#06040A]">
                        Accredited University Required:Yes
                      </div>
                      <div className="col-span-3 sm:col-span-1 rounded-lg bg-[#F9F9FA] flex items-center justify-start lg:justify-center p-2 text-[#06040A]">
                        GPA Required: 2
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 !mx-0 mt-12 w-[100%] sm:w-[200%] lg:w-[100%]">
                      <div className="col-span-3 sm:col-span-2 lg:col-span-2 text-[#06040A]">
                        <p className="mb-4"> Eligible Majors</p>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          Funeral Service and Mortuary Science
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          Cosmetology and Related Personal Grooming Services
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          Culinary Arts and Related Services
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          Culinary
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          Entertainment
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          Personal Services
                        </Typography>
                      </div>
                      <div className="col-span-3 sm:col-span-1 lg:col-span-1  text-[#06040A]">
                        <p className="mb-4"> Enrollment Level </p>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b  border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          College senior
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          College freshman
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          College junior
                        </Typography>
                        <Typography className="flex items-center text-[#06040A]  font-normal text-md border-b border-[#EBECF0] mb-3 p-0.5">
                          <DoneIcon
                            fontSize="inherit"
                            sx={{ marginRight: 3 }}
                            className="text-[#2DCA72]"
                          />
                          College sophomore
                        </Typography>
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
                <div className="w-[100%] sm:w-[50%] md:w-[60%] h-[460px] sm:h-[650px] mt-10 sm:mt-0 p-6 scholarship-bg-cover scholarship-auth-cover rounded-xl animate__animated animate__zoomIn relative">
                  {/* <Image src={CoverImage} alt="CoverImage" className="rounded-xl" /> */}
                  <div className="absolute w-[95%] lg:w-[75%] left-[50%] bottom-[25px] sm:bottom-[15px] translate-x-[-50%]">
                    <div className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl text-center !leading-10">
                      Start applying today!
                    </div>
                    <div className="text-[#FFFFFF] text-center mt-2 sm:m-4 text-md sm:text-lg	font-normal	!leading-7">
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
}
