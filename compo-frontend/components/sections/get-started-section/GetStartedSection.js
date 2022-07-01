import GetStartedOption from './GetStartedOption';
import ManIllustration1 from '../../svg/ManIllustration1';
import ManIllustration2 from '../../svg/ManIllustration2';

const options = [
  {
    title: 'Find schools that match your style',
    backgroundColorClass: 'bg-[#FFF9E9]',
    illustration: <ManIllustration1 />,
    buttonText: 'Find my match',
    buttonLink: '/',
  },
  {
    title: 'Find scholarships to help you pay',
    backgroundColorClass: 'bg-[#E5F1FB]',
    illustration: <ManIllustration2 />,
    buttonText: 'Find scholarships',
    buttonLink: '/',
  },
];

const GetStartedSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="section-title text-center max-w-3xl mx-auto mb-10">
          Which best describes how you want to get started?
        </h2>
        <ul className="flex flex-col lg:flex-row gap-10">
          <GetStartedOption optionParams={options[0]} />
          <GetStartedOption optionParams={options[1]} />
        </ul>
      </div>
    </section>
  );
};

export default GetStartedSection;
