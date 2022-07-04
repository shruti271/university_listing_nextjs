import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/university-sections/hero-section/HeroSection';
import UniversitiesSection from '../../components/university-sections/universities-section/UniversitiesSection';

const Universities = () => {
  return (
    <div className="bg-colorPale">
      <HeroSection />
      <div className="lg:flex">
        <section className="lg:basis-[552px] hidden lg:block pl-16">
          <h2 className="font-semibold text-3xl xl:text-5xl mb-4 mt-14">
            Filter option
          </h2>
          <Filter />
        </section>
        <UniversitiesSection />
      </div>
    </div>
  );
};

export default Universities;
