import imageGirl from '../../../assets/paths-section/girl.png';
import imageTeam from '../../../assets/paths-section/team.png';
import imageCollege from '../../../assets/paths-section/college.png';
import Link from 'next/link';

const paths = [
  {
    id: 1,
    title: 'Universities',
    description:
      'Search our global Universities database to find where you want to study',
    backgroundImage: imageCollege,
    href: '/',
  },
  {
    id: 2,
    title: 'Programs',
    description:
      'Discover Bachelors, Masters, & Phd programs',
    backgroundImage: imageGirl,
    href: '/',
  },
  {
    id: 3,
    title: 'Scholarships',
    description:
      'Find scholarships to help you pay for your dream education',
    backgroundImage: imageTeam,
    href: '/',
  },
];

const PathsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="section-title text-center mb-3 md:mb-8">
          What <span className="text-colorPrimary">path</span> you will take?
        </h2>
        <p className="text-center mb-4 md:mb-8 max-w-[625px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <ul className="flex flex-col md:flex-row gap-6">
          {paths.map((path) => (
            <Link key={path.id} href={path.href} passHref>
              <li
                className="p-10 rounded-2xl bg-cover bg-center text-colorWhite h-[406px] flex flex-col items-start justify-end gap-4 md:basis-1/3 cursor-pointer hover:pb-16 transition-all duration-500"
                style={{ backgroundImage: `url(${path.backgroundImage.src})` }}
              >
                <h4 className="text-colorWhite text-xl lg:text-2xl">
                  {path.title}
                </h4>
                <p className="text-sm lg:text-base">{path.description}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PathsSection;
