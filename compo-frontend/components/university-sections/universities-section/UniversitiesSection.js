import UniversityCard from './UniversityCard';
import { universities } from './universityData';

const UniversitiesSection = () => {
  return (
    <section className="py-11">
      <div className="container">
        {universities.map((university) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>
    </section>
  );
};

export default UniversitiesSection;
