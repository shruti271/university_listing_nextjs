import heroBg from '../../../assets/major-hero-bg.png';

const HeroSection = () => {
  return (
    <section
      className="py-16 md:py-24 mt-[112px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container">
        <h1 className="text-center font-semibold text-colorWhite text-2xl md:text-5xl">
          Majors
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
