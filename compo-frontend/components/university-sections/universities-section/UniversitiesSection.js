import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUniversities } from '../../../store/university/universitySlice';
import UpperFilter from '../../upper-filter/UpperFilter';
import UniversityCard from './UniversityCard';
// import { universities } from './universityData';

const UniversitiesSection = ({ className = '' }) => {
  const dispatch = useDispatch();
  const universities = useSelector(
    (state) => state.universities.filteredUniversities
  );
  const countUniversities = useSelector(
    (state) => state.universities.countUniversities
  );

  useEffect(() => {
    dispatch(getUniversities());
  }, []);

  return (
    <section className={`pt-32 pb-11 ${className}`}>
      <UpperFilter />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mb-14">
        {universities?.map((university) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>
      <div>
        <h2 className="">{countUniversities && countUniversities}</h2>
      </div>
    </section>
  );
};

export default UniversitiesSection;
