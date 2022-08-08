import DirectoryHero from '../../components/DirectoryHero/DirectoryHero';
import Filter from '../../components/universities-dir-filter/Filter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewsletterSection from '../../components/sections/newsletter-section/NewsletterSection';
import UniversitiesSection from '../../components/university-sections/universities-section/UniversitiesSection';
import uniBg from '../../assets/universities-page/hero-section/hero-bg.jpg';

const Universities = () => {
  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28">
        <DirectoryHero bgImg={uniBg.src} title="Universities" />
        <div className="lg:flex w-[90%] mx-auto max-w-[1580px] gap-10 xl:gap-20">
          <section className="lg:basis-[200px] xl:basis-[350px] hidden lg:block pt-14 pb-20">
            <h2 className="font-semibold text-3xl xl:text-5xl mb-6">
              Filter option
            </h2>
            <Filter />
          </section>
          <UniversitiesSection className="flex-1" />
        </div>
        <NewsletterSection />
      </div>
      <Footer />
    </>
  );
};

export default Universities;
