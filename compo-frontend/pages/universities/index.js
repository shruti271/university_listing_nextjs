import HeroSection from '../../components/university-sections/hero-section/HeroSection';
import UniversitiesSection from '../../components/university-sections/universities-section/UniversitiesSection';

const Universities = () => {
  return (
    <div className="bg-colorPale">
      <HeroSection />
      <div className="lg:flex">
        <section className="lg:basis-1/5 hidden lg:block">
          <h2>Filter option</h2>
        </section>
        <UniversitiesSection />
      </div>
    </div>
  );
};

export default Universities;
