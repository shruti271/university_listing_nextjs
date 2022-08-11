import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FavCourses from "../../components/sections/programs-section/fav-courses-section.js";
import ProgramsSection from "../../components/sections/programs-section/ProgramsSection.js";

import MainSearch from "../../components/filter/programs-filter/MainSearch";
import TopCourses from "../../components/sections/programs-section/TopCourses";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";
import DirectoryHero from "../../components/DirectoryHero/DirectoryHero.js";
import heroBg from "../../assets/major-hero-bg.png";

export default function ProgramsList() {
  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28 ">
        <DirectoryHero bgImg={heroBg.src} title="Majors" />

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
