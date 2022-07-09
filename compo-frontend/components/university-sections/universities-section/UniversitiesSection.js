import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UniversityCard from './UniversityCard';
// import { universities } from './universityData';

const UniversitiesSection = ({ className = '' }) => {
  const universities = useSelector(
    (state) => state.universities.filteredUniversities
  );

  return (
    <section className={`py-11 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        {universities.map((university) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>
    </section>
  );
};

export default UniversitiesSection;
