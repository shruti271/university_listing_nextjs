import MajorCard from "./MajorCard";
import Mjr1 from "../../../assets/mjr1.png";
import Mjr2 from "../../../assets/mjr2.png";
import Mjr3 from "../../../assets/mjr3.png";
import Mjr4 from "../../../assets/mjr4.png";
import Mjr5 from "../../../assets/mjr5.png";
import Mjr6 from "../../../assets/mjr6.png";
import Mjr7 from "../../../assets/mjr7.png";
import Mjr8 from "../../../assets/mjr8.png";
import Mjr9 from "../../../assets/mjr9.png";

const MajorsSection = () => {
  const MajorLists = [
    { image: Mjr1, title: "Health" },
    { image: Mjr2, title: "Creatives" },
    { image: Mjr3, title: "Designers & Builders" },
    { image: Mjr4, title: "Future Scientists" },
    { image: Mjr5, title: "Doctors & Care takers" },
    { image: Mjr6, title: "Capitalists" },
    { image: Mjr7, title: "Teachers & Eternal Learners" },
    { image: Mjr8, title: "Talkers & Writters" },
    { image: Mjr9, title: "Law Enforcement" },
  ];
  return (
    <div>
      <h1 className="font-semibold text-[#000000] text-xl md:text-2xl lg:text-3xl ">
        Choose a major which suits you best
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mt-10 ">
        {MajorLists?.map((itm) => (
          <MajorCard image={itm.image} title={itm?.title} />
        ))}
      </div>
    </div>
  );
};

export default MajorsSection;
