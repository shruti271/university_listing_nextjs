import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUniversities } from '../../../store/university/universitySlice';
import PaginationControlled from '../../PaginationControlled/PaginationControlled';
import UpperFilter from '../../upper-filter/UpperFilter';
import UniversityCard from './UniversityCard';

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
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <span className="text-colorBlack">
          Showing {universities.length} of {countUniversities}
        </span>
        <div>
          <PaginationControlled
            countPages={countUniversities}
            itemsPerPage={20}
          />
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
