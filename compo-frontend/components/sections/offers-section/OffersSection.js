import Image from 'next/image';

import PlacesIcon from '../../../assets/offers-section/places.svg';
import InstitutionIcon from '../../../assets/offers-section/instituotion-icon.svg';
import GraduationIcon from '../../../assets/offers-section/graduation-icon.svg';
import ScholarshipIcon from '../../../assets/offers-section/scholarship-icon.svg';

const offers = [
  {
    id: 1,
    title: 'Find The dream University & Program for you',
    icon: PlacesIcon,
    iconColor: 'bg-[#0A11E0]',
    description:
      'Use our edcational database directories to find the best educational outcomes',
  },
  {
    id: 2,
    title: 'Create a standout Profile',
    icon: InstitutionIcon,
    iconColor: 'bg-colorSecondary',
    description:
      'Allow universities to discover you and your talents by as well receiving personalised recommendations',
  },
  {
    id: 3,
    title: 'Understand your Chances',
    icon: GraduationIcon,
    iconColor: 'bg-[#3ECDAB]',
    description:
      'Use our Understand your Chances Engine to figure out how hard or easy it for you to get in',
  },
  {
    id: 4,
    title: 'Find a Scholarship',
    icon: ScholarshipIcon,
    iconColor: 'bg-[#41C04E]',
    description:
      'Easily find scholarhips you\'re eligble for according to your profile and chosen educational outcome',
  },
];

const OffersSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h3 className="section-title text-center mb-4">
          What <span className="text-colorPrimary">Composite</span> Offers
        </h3>
        <p className="text-center max-w-xl mx-auto mb-9">
        Discover and be discovered by Universities, understand your chances of getting in, and find a scholarship to fund your journey!
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers &&
            offers.map((offer) => (
              <li
                key={offer.id}
                className="offer-item flex flex-col items-start lg:flex-row gap-4 md:gap-8"
              >
                <div
                  className={`${offer.iconColor} p-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex-none`}
                >
                  <div className="relative w-full h-full">
                    <Image src={offer.icon} alt={offer.title} layout="fill" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-colorStone mb-3 text-2xl">
                    {offer.title}
                  </h4>
                  <p>{offer.description}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default OffersSection;
