import Image from 'next/image';

import AboutImage from '../../../assets/about-section/about-image.png';

const AboutSection = () => {
  return (
    <section className="py-10 md:py-28">
      <div className="container flex flex-col lg:flex-row-reverse md:items-start gap-10 md:gap-20">
        <div className="lg:basis-1/2">
          <h3 className="section-subtitle mb-2">What we do</h3>
          <h2 className="section-title mb-7">
            About <span className="text-colorPrimary">Composite</span>
          </h2>
          <p className="">
            The leading educational database, our platform will help students find 
            the right University, Program, and Scholarship for them. You can create a profile to get discovered as well
            recieving personalized recommendations. No more scattered searching to find youd your 
            dream subject and place to study!
            <br />
            <br />
            Composite isn&apos;t just for discovery. We provide students and
            their parents with helpful information to help them navigate the
            University journey-- from University-bound status through,
            graduate studies, and career.
            <br />
           
          </p>
        </div>
        <div className="relative w-[95%] h-[300px] md:h-[498px] mx-auto about-image lg:basis-1/2">
          <Image
            src={AboutImage}
            alt="Girl Looking up"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
