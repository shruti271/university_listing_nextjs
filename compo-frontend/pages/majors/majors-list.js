import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/sections/majors-section/HeroSection";
import FavCourses from "../../components/sections/majors-section/fav-courses-section.js";
import MajorsSection from "../../components/sections/majors-section/MajorsSection.js";

import MainSearch from "../../components/filter/majors-filter/MainSearch";
import TopCourses from "../../components/sections/majors-section/TopCourses";

export default function majorsList() {
  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28 ">
        <HeroSection />
        <FavCourses />

        <div className="grid grid-cols-12 gap-4 sm:gap-6 container ">
          <div className="col-span-12 sm:col-span-5 lg:col-span-4 ">
            <MainSearch  />
            <TopCourses />
          </div>
          <div className="col-span-12 sm:col-span-7 lg:col-span-8">
            <MajorsSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
