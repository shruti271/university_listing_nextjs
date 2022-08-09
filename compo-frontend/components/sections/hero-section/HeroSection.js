import Image from "next/image";
import { motion } from "framer-motion";

import CirclesText from "../../../assets/hero-section/circles-0.svg";
import HeroIllustration from "./Illustration";

const headingParentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const headingChildrenVariants = (delay) => {
  return {
    hidden: { y: "100%", opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, delay } },
  };
};

const HeroSection = () => {
  return (
    <section className="pt-40 md:pt-60 overflow-hidden">
      <div className="container relative h-[120vh] max-h-[800px] md:max-h-[600px]">
        <motion.h1
          variants={headingParentVariants}
          initial="hidden"
          animate="show"
          className="font-bold text-4xl md:text-6xl lg:text-7xl md:leading-[70px] lg:leading-[85px] mb-10 md:mb-16 relative"
        >
          <div className="absolute -top-8 md:-top-12 -left-4 md:-left-9 lg:-left-8 -z-10">
            <div className="w-10 md:w-16 h-10 md:h-16 relative">
              <Image src={CirclesText} alt="circles" layout="fill" />
            </div>
          </div>
          <span className="block overflow-y-hidden">
            <motion.span
              className="block"
              variants={headingChildrenVariants(0.3)}
            >
              Find your <span className="text-colorPrimary">University</span>.
            </motion.span>
          </span>
          <span className="block overflow-y-hidden">
            <motion.span
              variants={headingChildrenVariants(0.6)}
              className="block"
            >
              Get a <span className="text-colorSecondary">Scholarship</span>.
            </motion.span>
          </span>
        </motion.h1>
        <motion.p
          variants={headingChildrenVariants(1)}
          initial="hidden"
          animate="show"
          className="mb-10 lg:mb-20 max-w-[531px]"
        >
          Composite is the leading educational platform in the world, allowing
          students to connect with Universities and discover the next step in
          their edcuational journey.
        </motion.p>
        <div>
          <h3 className="font-semibold text-lg md:text-xl mb-4">
            What are you searching for?
          </h3>
          <ul className="flex items-center gap-2 flex-wrap justify-start">
            <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Universities</span>
            </li>
            <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Programs</span>
            </li>
            <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Scholarships</span>
            </li>
            {/* <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Articles</span>
            </li> */}
          </ul>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
};

export default HeroSection;
