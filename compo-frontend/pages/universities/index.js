import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filter from '../../components/filter/Filter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewsletterSection from '../../components/sections/newsletter-section/NewsletterSection';
import HeroSection from '../../components/university-sections/hero-section/HeroSection';
import UniversitiesSection from '../../components/university-sections/universities-section/UniversitiesSection';
import getStore from '../../store/store';
import {
  getUniversities,
  rehydrate,
} from '../../store/university/universitySlice';

export const getServerSideProps = async () => {
  const store = getStore();
  await store.dispatch(getUniversities());

  return {
    props: {
      initialState: store.getState(),
    },
  };
};

const Universities = ({ initialState }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rehydrate(initialState.universities));
  }, [dispatch, initialState]);

  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28">
        <HeroSection />
        <div className="lg:flex w-[90%] mx-auto max-w-[1580px] gap-10 xl:gap-20">
          <section className="lg:basis-[200px] xl:basis-[350px] hidden lg:block pt-14 pb-20">
            <h2 className="font-semibold text-3xl xl:text-5xl mb-4">
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
