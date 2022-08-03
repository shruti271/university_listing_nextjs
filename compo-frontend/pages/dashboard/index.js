import { Avatar } from "@mui/material";
import Profile from "../../assets/profile.png";
import Ranking from "../../assets/Ranking.svg";
import MedalIcon from "../../assets/Medal.svg";
import DashboardProfile from "../../assets/dashboard-profile.png";
import heartIcon from "../../assets/heart.svg";
import UpgradeIcon from "../../assets/upgrade-icon.svg";

import Image from "next/image";

import * as React from "react";
import UniversityCard from "../../components/university-sections/universities-section/UniversityCard";
import dubaiUniLogo from "../../assets/universities-page/universities-section/uni-dubai.jpg";
import floridaUniLogo from "../../assets/universities-page/universities-section/uni-florida.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import BoltTwoToneIcon from "@mui/icons-material/BoltTwoTone";
import ScholarshipCard from "../../components/ScholarshipCard.js";
import ActivityIcon from "../../components/svg/ActivityIcon";

import {
  CustomAvatarGroup,
  CircularProgressWithLabel,
} from "../../components/core/CustomMUIComponents";

export default function Dashboard() {
  const universities = [
    {
      id: 1,
      logo: dubaiUniLogo,
      location: "Dubai, United Arab Emirates",
      type: "public",
      acceptanceRate: "59",
      name: "University of Dubai",
      description:
        "The University of Dubai has been home to talented students and faculty drawn from around the world to teach, create, and study.",
      stats: { ranking: 10, numberOfStudents: 8000, avgCost: 2300, avgACT: 29 },
      linkApply: "/universities",
      linkView: "/universities",
    },
    {
      id: 2,
      logo: floridaUniLogo,
      location: "Florida, United States",
      type: "private",
      acceptanceRate: "76",
      name: "University of Central Florida",
      description:
        "The University of Central Florida has been home to talented students and faculty drawn from around the world to teach, create, and study.",
      stats: { ranking: 8, numberOfStudents: 2300, avgCost: 22300, avgACT: 78 },
      linkApply: "/universities",
      linkView: "/universities",
    },
    {
      id: 3,
      logo: floridaUniLogo,
      location: "Florida, United States",
      type: "private",
      acceptanceRate: "76",
      name: "University of Central Florida",
      description:
        "The University of Central Florida has been home to talented students and faculty drawn from around the world to teach, create, and study.",
      stats: { ranking: 8, numberOfStudents: 2300, avgCost: 22300, avgACT: 78 },
      linkApply: "/universities",
      linkView: "/universities",
    },
    {
      id: 4,
      logo: dubaiUniLogo,
      location: "Dubai, United Arab Emirates",
      type: "public",
      acceptanceRate: "59",
      name: "University of Dubai",
      description:
        "The University of Dubai has been home to talented students and faculty drawn from around the world to teach, create, and study.",
      stats: { ranking: 10, numberOfStudents: 8000, avgCost: 2300, avgACT: 29 },
      linkApply: "/universities",
      linkView: "/universities",
    },
  ];

  const Activities = [
    "Your application has accepted in 3 universities",
    "Your scholarship has approved in EMMED program",
    "Due to incomplete profile your application is on hold",
    "Your application has accepted in 3 Vaccancy",
    "Your scholarship has approved in EMMED program",
    "Due to incomplete profile your application is on hold",
  ];

  const UpcomingUni = [
    { name: "Dubai, UAE", uniName: "Univeristy of Dubai", val: 75 },
    { name: "Orlando, FL", uniName: "Univeristy of Central Florida", val: 35 },
    {
      name: "Yoast Esac",
      uniName: "University of Washignton -Settle Campus",
      val: 95,
    },
  ];

  return (
    <div className="bg-[#FBFBFB]">
      <div className="grid grid-cols-12 gap-4 container mx-auto ">
        <div className="col-span-12 sm:col-span-5 lg:col-span-3 ">
          <div className="bg-[#FFFFFF] rounded-[20px] p-5 container mx-auto">
            <div className="flex items-center justify-center">
              <CircularProgressWithLabel
                profile={<Image src={Profile} />}
                value={80}
                size={100}
                color="#8743DF"
                strokeLinecap="round"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <p className="text-[#171725] font-semibold text-lg">Ali Aslam</p>
              <p className="text-[#696974] leading-[0.1px] font-normal text-sm mt-2">
                Bachelor’s of Computer Science
              </p>
              <p className="text-[#979797] font-normal text-xs mt-2">
                California Institue of Arts
              </p>
            </div>
            <div className="flex items-center justify-center mt-4 border-b border-[#F2F2F2] pb-4">
              <Image src={Ranking} />
            </div>
            <div className="flex flex-col gap-2  mt-5 border-b border-[#F2F2F2] pb-5">
              <div className="flex items-center justify-between container mx-auto">
                <p className="text-[#92929D] font-normal text-sm">
                  Univeristies who viwed you
                </p>
                <p className="text-[#0062FF] font-semibold text-sm">25</p>
              </div>
              <div className="flex items-center justify-between container mx-auto">
                <p className="text-[#92929D] font-normal text-sm">
                  Scholarships applied
                </p>
                <p className="text-[#0062FF] font-semibold text-sm">56</p>
              </div>
            </div>
            <div className="flex gap-3 items-center mt-5 ">
              <button
                className={`w-7 h-7  rounded-md transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D]`}
              >
                <Image src={heartIcon} alt="heart" width="12" height="12" />
              </button>
              <p className="text-[#92929D] font-normal text-sm">
                Your saved items
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-[20px] p-5 mt-5 container mx-auto">
            <p className="font-semibold  text-[#3D3D3D] text-lg">
              Recent Activities
            </p>
            <div className="max-h-[300px] overflow-y-auto mt-3">
              {Activities?.map((itm) => (
                <div className="mt-5 flex gap-4 ">
                  <div className="p-4 flex items-center justify-center  border border-[#F3EAFF] rounded-[20px] h-[50px]">
                    <ActivityIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-sm text-[#616161]">
                      {itm}
                    </div>
                    <div className="text-[#AEAEAE] font-normal text-sm">
                      12h ago
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-[20px] p-5 mt-5 container mx-auto">
            <div className="flex items-center justify-between">
              <div className="font-bold text-lg text-[#374557] upgrade-cover relative">
                <Image src={UpgradeIcon} />
                Upgrade your Account to Pro
              </div>
              <div className="">
                <Image src={MedalIcon} />
              </div>
            </div>
            <div className="mt-2 text-sm font-normal text-[#A098AE]">
              Upgrade to premium to get premium features
            </div>
            <div className="mt-8">
              <button
                className="bg-[#0364FF] hover:bg-[#0364FF] text-[#FFFFFF] px-8 py-3  rounded-xl tracking-wide
                  font-semibold focus:outline-none focus:shadow-outline 
                  shadow-lg flex items-center justify-center"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-7 lg:col-span-6 ">
          <div className="w-[100%]   bg-cover profile-cover rounded-xl animate__animated animate__zoomIn container mx-auto ">
            <div className="grid grid-cols-4">
              <div className="col-span-2 sm:col-span-3 p-5">
                <div className="text-[#FFFFFF] text-xl font-extrabold uppercase mt-5">
                  Welcome Back! Ali
                </div>
                <div className="text-[#FFFFFF] text-sm leading-[22px] font-normal  mt-1">
                  You have completed 60% of your goal this week! start a new
                  goal and improve your result
                </div>
                <div className="mt-7">
                  <button
                    className="bg-[#C86DFF] hover:bg-[#C86DFF] text-[#FFFFFF] px-8 py-3  rounded
                  font-semibold focus:outline-none focus:shadow-outline text-sm tracking-wide
                  shadow-lg flex items-center justify-center whitespace-nowrap	"
                  >
                    Complete Profile
                  </button>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Image src={DashboardProfile} />
              </div>
            </div>
          </div>

          <div className="font-semibold text-xl sm:text-2xl sm:leading-[39px] text-[#03014C]  container mx-auto mt-8">
            Univeristies and Scholarships based on your profile
          </div>
          <div className="max-h-[600px] sm:max-h-[725px] lg:max-h-[745px] xl:max-h-[785px] overflow-y-auto mt-4 pb-[3px]">
            <div className="grid grid-cols-1 container mx-auto mt-4  gap-4  ">
              <UniversityCard university={universities[0]} />
              <UniversityCard university={universities[1]} />
              <ScholarshipCard />
              <UniversityCard university={universities[2]} />
              <ScholarshipCard />
              <UniversityCard university={universities[3]} />
              <UniversityCard university={universities[0]} />
              <ScholarshipCard />
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-12 lg:col-span-3">
          <div className="grid grid-cols-12">
            <div className="container mx-auto col-span-12 sm:col-span-6 lg:col-span-12">
              <div
                className="bg-[#FEFEFE]  rounded-tl-[20px] rounded-tr-[20px] text-[#000000] text-xl font-semibold p-5"
                style={{ boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)" }}
              >
                Upcoming Admissioms
              </div>
              <div className="rounded-bl-[20px] bg-[#FFFFFF]  rounded-br-[20px] max-h-[425px] overflow-y-auto ">
                {UpcomingUni?.map((itm) => (
                  <div className="p-5 border-b ">
                    <p className="text-[#2953E8] font-semibold text-sm tracking-[-0.24px]">
                      {itm?.name}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-[#000000] font-semibold text-base tracking-[-0.24px]">
                        {itm?.uniName}
                      </p>
                      <MoreVertIcon />
                    </div>
                    <div className="text-[0.75rem] mt-3 flex items-center gap-2">
                      <span className="text-colorBlack pr-2 border-r-2 border-colorBlack capitalize">
                        Public
                      </span>
                      <span className="text-[#92929D]">
                        <span className="text-colorBlack mr-1">
                          {itm?.val}%
                        </span>
                        Acceptance rate
                      </span>
                    </div>
                    <div className="flex items-center justify-start gap-2 mt-6">
                      <div className="flex items-center justify-center">
                        <CircularProgressWithLabel
                          profile={
                            <BoltTwoToneIcon
                              sx={{
                                color: "#2953E8",
                                height: "35px",
                                width: "35px",
                              }}
                            />
                          }
                          value={itm?.val}
                          size={60}
                          color="#2953E8"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#A0A0A0] font-normal text-base tracking-[-0.24px]">
                          Deadline
                        </p>
                        <p className="text-[#000000] font-semibold text-base tracking-[-0.24px]">
                          Tuesday, Sep 29th 2022
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="container mx-auto mt-6 sm:mt-0 lg:mt-6 col-span-12 sm:col-span-6 lg:col-span-12">
              <div className="bg-[#FEFEFE]  rounded-tl-[20px] rounded-tr-[20px] text-[#000000] text-xl font-semibold p-5">
                Majors for you
              </div>
              <div className="rounded-bl-[20px] bg-[#FFFFFF]  rounded-br-[20px] max-h-[425px] overflow-y-auto ">
                <div className="p-3 ">
                  {[0, 1, 2]?.map((itm) => (
                    <div className="grid grid-cols-4 gap-3 pb-7">
                      <div className="col-span-1">
                        <Avatar
                          sx={{
                            bgcolor: "#FC5A5A",
                            width: "50px",
                            height: "50px",
                          }}
                        />
                      </div>
                      <div className="col-span-3 gap-1">
                        <p className="text-[#000000] font-semibold text-md leading-[21px] tracking-[0.1px]">
                          Arts/Art Studies, General
                        </p>
                        <p className="text-[#000000] font-normal text-sm leading-[21px] ">
                          Multiple Univerities
                        </p>
                        <div className="flex items-center justify-start flex-wrap gap-2">
                          <div className="text-[#000000] text-xs font-normal">
                            Arts/General
                          </div>
                          <li className="text-[#000000] text-xs font-normal">
                            15,321 Total Members
                          </li>
                        </div>

                        <div className="mt-3 flex items-center justify-start gap-1">
                          <CustomAvatarGroup max={3}>
                            <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                            <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                            <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                            <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                            <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                            <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                            <Avatar sx={{ bgcolor: "#FC5A5A" }} />
                          </CustomAvatarGroup>
                          <div className="text-[#000000] text-xs font-normal">
                            50 Studetns enrolled
                          </div>
                        </div>

                        <div className="mt-4 flex gap-2 flex-wrap">
                          <button
                            className="bg-[#0364FF] hover:bg-[#0364FF] text-[#FFFFFF] px-6 py-2  rounded-full tracking-wide
                                  font-semibold focus:outline-none focus:shadow-outline 
                                  shadow-lg flex items-center justify-center text-center"
                          >
                            Enroll
                          </button>
                          <button
                            className="bg-[#292932] hover:bg-[#292932] text-[#FFFFFF] px-6 py-2  rounded-full tracking-wide
                        font-semibold focus:outline-none focus:shadow-outline 
                        shadow-lg flex items-center justify-center text-center"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
