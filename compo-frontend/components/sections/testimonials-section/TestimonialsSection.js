import Image from 'next/image';
import { useState } from 'react';
import girlImage from '../../../assets/testimonials-section/girl.png';
import girlImage2 from '../../../assets/testimonials-section/girl-2.png';
import girlImage3 from '../../../assets/testimonials-section/girl-3.png';
import StarSVG from './Stars';

const testimonials = [
  {
    name: 'Sizuka engkol',
    university: 'University of Indonesia',
    quote:
      " I'm very happy to get this scholarship because the system is very good and I can also enjoy how to study until it's free thank you composite for paving the path.",
    image: girlImage,
  },
  {
    name: 'Yolanda Agomo',
    university: 'University of Lefke',
    quote:
      " I'm very happy to get this scholarship because the system is very good and I can also enjoy how to study until it's free thank you composite for paving the path.",
    image: girlImage2,
  },
  {
    name: 'Iyumame Ama',
    university: 'University of New York',
    quote:
      " I'm very happy to get this scholarship because the system is very good and I can also enjoy how to study until it's free thank you composite for paving the path.",
    image: girlImage3,
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    if (activeTestimonial === 2) {
      setActiveTestimonial(0);
      return;
    }
    setActiveTestimonial(activeTestimonial + 1);
  };

  const previousTestimonial = () => {
    if (activeTestimonial === 0) {
      setActiveTestimonial(2);
      return;
    }
    setActiveTestimonial(activeTestimonial - 1);
  };

  return (
    <section className="py-20">
      <div className="container flex flex-col gap-10 md:flex-row-reverse items-center md:gap-20">
        <div className="md:basis-1/2">
          <h2 className="section-title mb-4">What students say about us?</h2>
          <p className="mb-20">
            These are some of their comments about you organizing about free
            scholarships for a year from elementary school to college
          </p>
          <div className="flex items-center gap-5">
            <button
              className="bg-colorPrimary rounded-full w-16 h-16 hover:opacity-60 transition-opacity duration-300"
              onClick={previousTestimonial}
            >
              <span className="text-colorWhite text-2xl">{'<'}</span>
            </button>
            <button
              className="bg-colorPrimary rounded-full w-16 h-16 hover:opacity-60 transition-opacity duration-300"
              onClick={nextTestimonial}
            >
              <span className="text-colorWhite text-2xl">{'>'}</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-8 grid-rows-6 md:basis-1/2">
          <div className="w-full h-full col-span-7 sm:col-span-6 sm:col-start-1 md:row-start-1 md:row-end-4 lg:row-end-5 lg:col-span-3 lg:col-start-1 row-span-4 row-start-1 col-start-1">
            <div className="relative w-full h-full">
              <Image
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="rounded-xl"
              />
            </div>
          </div>
          <div
            style={{ boxShadow: '10px 24px 54px rgba(0, 0, 0, 0.06)' }}
            className="w-full h-full rounded-xl p-5 col-span-7 row-start-3 row-end-6 col-start-2 z-10 bg-colorWhite"
          >
            <h4 className="font-semibold text-xl md:text-2xl mb-2">
              {testimonials[activeTestimonial].name}
            </h4>
            <p className="mb-7">{testimonials[activeTestimonial].university}</p>
            <p className="mb-10">{testimonials[activeTestimonial].quote}</p>
            <div className="flex items-center">
              <StarSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
