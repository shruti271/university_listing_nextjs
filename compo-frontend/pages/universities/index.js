import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filter from '../../components/filter/Filter';
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
    <div className="bg-colorPale">
      <HeroSection />
      <div className="lg:flex w-[90%] mx-auto max-w-[1580px] gap-10 xl:gap-20">
        <section className="lg:basis-[200px] xl:basis-[350px] hidden lg:block">
          <h2 className="font-semibold text-3xl xl:text-5xl mb-4 mt-14">
            Filter option
          </h2>
          <Filter />
        </section>
        <UniversitiesSection className="flex-1" />
      </div>
    </div>
  );
};

export default Universities;
