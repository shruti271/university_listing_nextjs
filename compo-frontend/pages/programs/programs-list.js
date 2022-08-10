import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/sections/programs-section/HeroSection";
import FavCourses from "../../components/sections/programs-section/fav-courses-section.js";
import ProgramsSection from "../../components/sections/programs-section/ProgramsSection.js";

import MainSearch from "../../components/filter/programs-filter/MainSearch";
import TopCourses from "../../components/sections/programs-section/TopCourses";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";

export default function ProgramsList() {
  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28 ">
        <HeroSection />
        <FavCourses />

        <div className="grid grid-cols-12 gap-4 sm:gap-6 container ">
          <div className="col-span-12 sm:col-span-5 lg:col-span-4 ">
            <MainSearch />
            <TopCourses />
          </div>
          <div className="col-span-12 sm:col-span-7 lg:col-span-8">
            <ProgramsSection />
          </div>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
}
