import dubaiUniLogo from "../../../assets/universities-page/universities-section/uni-dubai.jpg";
import floridaUniLogo from "../../../assets/universities-page/universities-section/uni-florida.jpg";
import UniversityCard from "../../university-sections/universities-section/UniversityCard";
import ScholarshipCard from "./ScholarshipCard";
import DesignTool from "./DesignTool";

const DashboardMiddleSection = () => {
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

  return (
    <>
      <div className="font-semibold text-xl sm:text-2xl sm:leading-[39px] text-[#03014C]  container mx-auto mt-2">
        Universities and Scholarships based on your profile
      </div>
      <div className="max-h-[600px] sm:max-h-[620px] lg:max-h-[680px] xl:max-h-[720px] overflow-y-auto mt-4 pb-[3px]">
        <div className="grid grid-cols-1 container mx-auto mt-4  gap-4  ">
          <UniversityCard university={universities[0]} />
          <DesignTool />
          <ScholarshipCard />
          <UniversityCard university={universities[1]} />
          <DesignTool />
          <UniversityCard university={universities[2]} />
          <ScholarshipCard />
          <UniversityCard university={universities[3]} />
          <DesignTool />
          <UniversityCard university={universities[0]} />
          <ScholarshipCard />
        </div>
      </div>
    </>
  );
};

export default DashboardMiddleSection;
