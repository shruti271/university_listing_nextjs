import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import CoverImage from "../../assets/universities-page/hero-section/hero-bg1.png";

import * as React from "react";
import Tab from "@mui/material/Tab";

import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import {
  CustomTab,
  TabPanel,
  a11yProps,
} from "../../components/core/CustomMUIComponents";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";

import UniversityCard from "../../components/university-sections/universities-section/UniversityCard";
import dubaiUniLogo from "../../assets/universities-page/universities-section/uni-dubai.jpg";
import floridaUniLogo from "../../assets/universities-page/universities-section/uni-florida.jpg";

import UniOverview from "../../components/sections/universities-details/uni-overview";
import UniAcademics from "../../components/sections/universities-details/uni-academics";
import ImportantDeadlines from "../../components/sections/universities-details/uni-deadlines";
import UniHeaderSection from "../../components/sections/universities-details/uni-headersection";

const UniversitiesDetails = () => {
  const [value, setValue] = React.useState(0);

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

  console.log("universities......", universities);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Tabs = [
    {
      label: "Overview",
      icon: <AutoAwesomeMosaicOutlinedIcon />,
    },
    {
      label: "Academics",
      icon: <WorkOutlineOutlinedIcon />,
    },
    {
      label: "Majors",
      icon: <CrisisAlertOutlinedIcon />,
    },
    {
      label: "Tution",
      icon: <AccountTreeOutlinedIcon />,
    },
    {
      label: "Admissions",
      icon: <SupervisorAccountOutlinedIcon />,
    },
    {
      label: "Campus Life",
      icon: <CabinOutlinedIcon />,
    },
    {
      label: "After Graduation",
      icon: <SchoolOutlinedIcon />,
    },
    {
      label: "Reviews",
      icon: <ReviewsOutlinedIcon />,
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28">
        <section
          className="py-16 md:py-24 mt-[112px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${CoverImage.src})` }}
        >
        </section>
        <div className="bg-[#F9F9FA]">
          <UniHeaderSection />

          <div className="w-[90%]  sm:w-10/12 mx-auto">
            <div className="rounded-lg sm:hidden mt-6 bg-white">
              <CustomTab
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                setwidth="50%"
                setjustifycontent="center"
                className="w-full"
              >
                {Tabs.map((item, index) => (
                  <Tab
                    key={index}
                    icon={item.icon}
                    iconPosition="start"
                    label={item.label}
                    {...a11yProps(index)}
                    className="whitespace-nowrap"
                  />
                ))}
              </CustomTab>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 mt-6 hidden sm:block">
                <div className="rounded-lg bg-white flex h-[300px]">
                  <CustomTab
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className="w-full"
                    setwidth="100%"
                    setjustifycontent="start"
                  >
                    {Tabs.map((item, index) => (
                      <Tab
                        key={index}
                        icon={item.icon}
                        iconPosition="start"
                        label={item.label}
                        {...a11yProps(index)}
                      />
                    ))}
                  </CustomTab>
                </div>
                <div className="rounded-lg bg-white mt-4">
                  <ImportantDeadlines />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2 mt-6">
                <TabPanel value={value} index={0}>
                  <UniOverview />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <UniAcademics />
                </TabPanel>
                {[2, 3, 4, 5, 6, 7].map((tabVal) => (
                  <TabPanel value={value} index={tabVal} key={tabVal}>
                    {value + 1} Tab
                  </TabPanel>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[90%] rounded-lg bg-white mt-4 sm:hidden mx-auto">
            <ImportantDeadlines />
          </div>

          <div className="w-[90%]  sm:w-10/12 mx-auto flex mt-24 justify-between items-center">
            <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#363848] ">
              Related univeristies
            </h4>
            <button className="bg-[#0364FF] hover:bg-[#0364FF] text-white px-4 py-2 sm:px-9 sm:py-3 rounded-xl font-semibold shadow-lg hover:scale-95 transition-all duration-300 whitespace-nowrap">
              View More
            </button>
          </div>
          <div className="w-[90%]  sm:w-10/12 mx-auto mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {universities.map((university) => (
                <UniversityCard key={university.id} university={university} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UniversitiesDetails;
