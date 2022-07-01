import Image from 'next/image';

import AboutImage from '../../../assets/about-section/about-image.png';

const AboutSection = () => {
  return (
    <section className="py-10 md:py-28">
      <div className="container flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-20">
        <div className="md:basis-1/2">
          <h3 className="section-subtitle mb-2">What we do</h3>
          <h2 className="section-title mb-7">
            About <span className="text-colorPrimary">Composite</span>
          </h2>
          <p className="">
            The leading scholarship database, our platform is designed to
            simplify the scholarship search for high school and college
            students. No more digging to find scholarships you qualify for.
            Students create a profile and get personalized scholarship
            recommendations.
            <br />
            <br />
            Composite isn&apos;t just for scholarships. We provide students and
            their parents with helpful information to help them navigate the
            college journey-- from college-bound status through college,
            graduate school, and career.
            <br />
            <br />
            The leading scholarship database, our platform is designed to
            simplify the scholarship search for high school and college
            students. No more digging to find scholarships you qualify for.
            Students create a profile and get personalized scholarship
            recommendations.
          </p>
        </div>
        <div className="relative w-[95%] h-[300px] md:h-[498px] mx-auto about-image md:basis-1/2">
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
