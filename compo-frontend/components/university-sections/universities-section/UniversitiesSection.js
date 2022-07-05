import UniversityCard from './UniversityCard';
import { universities } from './universityData';

const UniversitiesSection = ({ className = '' }) => {
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
