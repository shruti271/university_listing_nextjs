import FavCourseCard from "./fav-course-card.js";
import computerSci from "../../../assets/computer-sci.svg";
import Business from "../../../assets/business.svg";
import Art from "../../../assets/art.svg";
import Maths from "../../../assets/maths.svg";
import DataSci from "../../../assets/data-sci.svg";

const FavCourses = () => {
  const FavCoursesList = [
    { image: computerSci, label: "Computer Science", numOfCourse: 40 },
    { image: Business, label: "Business", numOfCourse: 120 },
    { image: Art, label: "Art & humanities", numOfCourse: 140 },
    { image: Maths, label: "Maths & Logics", numOfCourse: 80 },
    { image: DataSci, label: "Maths & Logics", numOfCourse: 90 },
  ];

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container">
        <h1 className="text-center font-semibold text-[#000000] text-xl sm:text-2xl md:text-3xl lg:text-4xl  !leading-[40px] sm:!leading-[60px] lg:!leading-[80px] tracking-[0.125px]">
          Our Favorite Courses Category
        </h1>
        <div className="flex flex-wrap justify-center mt-9 gap-7">
          {FavCoursesList?.map((itm) => (
            <FavCourseCard
              image={itm?.image}
              label={itm?.label}
              numOfCourse={itm?.numOfCourse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavCourses;
