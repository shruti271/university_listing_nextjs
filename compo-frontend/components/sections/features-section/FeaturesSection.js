import FeaturesListItem from './FeaturesListItem';
import { features, universities } from './featuresData';
import FeaturesUniItem from './FeaturesUniItem';
import EggSVG from '../../svg/Egg';

const FeaturesSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container flex flex-col md:flex-row-reverse md:items-start gap-10 lg:gap-20 xl:gap-32">
        <div className="md:basis-1/2">
          <h3 className="section-subtitle mb-5">What we have</h3>
          <h2 className="section-title mb-10">
            <span className="text-colorSecondary">Best</span> Universities, 
            Programs & Scholarships
          </h2>
          <ul className="rounded-2xl features-list overflow-hidden bg-colorWhite">
            {features &&
              features.map((feature) => (
                <FeaturesListItem
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
          </ul>
        </div>
        <div className="md:basis-1/2 relative">
          <div className="absolute h-[180%] -left-1/2 translate-x-[17%] -top-[17rem] -z-20">
            <EggSVG />
          </div>
          <ul className="uni-rankings-list rounded-2xl bg-colorWhite">
            <li className="px-7 py-6 flex items-center justify-between border-b-2">
              <h4 className="font-semibold text-md md:text-2xl">
                Best places to study
              </h4>
              <span className="font-semibold text-md md:text-2xl text-colorBlack">
                Rank
              </span>
            </li>
            {universities &&
              universities.map((university) => (
                <FeaturesUniItem key={university.id} university={university} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
