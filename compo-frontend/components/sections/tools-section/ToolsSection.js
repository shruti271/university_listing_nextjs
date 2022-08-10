import Image from "next/image";
import StarRating from "../../svg/Star";
import universityImage from "../../../assets/tools-section/university.png";
import PersonImage from "../../../assets/tools-section/person.png";
import Exponent from "../../svg/Exponent";
import Parallax from "../../Parallax";

const boxShadow = { boxShadow: "0px 8px 40px -2px rgba(6, 12, 59, 0.08)" };

const Rating = ({ className = "" }) => (
  <div
    className={`flex items-center gap-1 p-3 rounded-md ${className}`}
    style={boxShadow}
  >
    <div className="w-5 h-5">
      <StarRating />
    </div>
    <span className="section-subtitle">4.8</span>
  </div>
);

const Chances = ({ className = "" }) => (
  <div
    className={`p-6 flex flex-col items-center gap-2 rounded-md ${className}`}
    style={boxShadow}
  >
    <span>Chances</span>
    <span className="font-semibold text-3xl lg:text-5xl text-colorBlack">
      76.8%
    </span>
    <span>Acceptance rate</span>
    <span className="text-colorPrimary">18%</span>
  </div>
);

const Scholarship = ({ className = "" }) => (
  <div
    className={`${className}`}
    style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.13)" }}
  >
    <div className="relative w-full h-[60%]">
      <Image
        src={universityImage}
        alt="University"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="px-5 py-3 text-left h-[40%]">
      <p className="text-xl font-semibold max-w-[220px] text-colorBlack">
      Chernivtsi National University
      </p>
      <span className="text-colorPrimary">$12700</span>
    </div>
  </div>
);

const Applications = ({ className = "" }) => {
  const people = [];
  for (let i = 0; i < 5; i++) {
    people.push(
      <li
        className={`relative w-12 h-12`}
        style={{ transform: `translateX(-${i * 20}px)` }}
      >
        <Image src={PersonImage} alt="Person" layout="fill" />
      </li>
    );
  }

  return (
    <div className={`px-6 py-5 rounded-md ${className}`} style={boxShadow}>
      <h4 className="text-xl font-semibold text-left mb-4">
        Total Applicants
      </h4>
      <div className="flex items-center gap-20">
        <div className="flex flex-col">
          <span className="font-semibold text-3xl text-colorBlack">+1120</span>
          <span className="text-colorPrimary">Students</span>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ className = "" }) => (
  <div className={`rounded-md p-7 relative ${className}`} style={boxShadow}>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[72px] ">
      <Exponent />
    </div>
  </div>
);

const ToolsSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container flex flex-col items-center md:items-start md:flex-row-reverse md:justify-between gap-10">
        <div className="md:basis-1/2 md:text-right">
          <h3 className="section-subtitle mb-6 md:mb-10">
            Best place for your future
          </h3>
          <h2 className="section-title mb-6 md:mb-10">
            Tools and resources for every student.
          </h2>
          <p>
            Start planning as a high-school, undergraduate, or even graduate student. Find your ideal next step no matter what stage of your educational journey you're in. <br />
            <br />
            Search our gloval directory of Universities, Programs, and Scholarships to discover different paths. Use the Chances Engine to figure out your success chances.
            And create your own profile to get discovered and recieve tailored recommendations.
          </p>
        </div>
        <div className="grid grid-cols-5 grid-rows-6 gap-4 md:gap-10 h-[545px] max-w-[536px] md:basis-1/2">
          <div className="borderls col-span-2 row-span-2 flex items-center justify-center">
            <Parallax>
              <Rating />
            </Parallax>
          </div>
          <div className="borderls col-span-3 row-span-4">
            <Parallax offset={20} className="w-full h-full">
              <Scholarship className="w-full h-full" />
            </Parallax>
          </div>
          <div className="borderls col-span-2 row-span-2">
            <Parallax>
              <Chances className="w-full h-full" />
            </Parallax>
          </div>
          <div className="borderls col-span-4 row-span-2">
            <Parallax>
              <Applications className="w-full h-full" />
            </Parallax>
          </div>
          <div className="borderls">
            <Parallax>
              <Stat className="w-full h-full" />
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
