import DirectoryHero from '../DirectoryHero/DirectoryHero';
import Header from '../Header';
import uniBg from '../../assets/universities-page/hero-section/hero-bg.jpg';
import Footer from '../Footer';
import NewsletterSection from '../sections/newsletter-section/NewsletterSection';

const DirectoryLayout = ({
  heroBg = uniBg.src,
  pageTitle = 'Directory',
  children,
}) => {
  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28">
        <DirectoryHero bgImg={heroBg} title={pageTitle} />
        <div className="lg:flex w-[90%] mx-auto max-w-[1580px] gap-10 xl:gap-20">
          {children}
        </div>
        <NewsletterSection />
      </div>
      <Footer />
    </>
  );
};

export default DirectoryLayout;
