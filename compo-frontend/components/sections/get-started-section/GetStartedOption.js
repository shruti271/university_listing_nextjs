import { motion } from 'framer-motion';
import PrimaryButton from '../../PrimaryButton';
import Link from 'next/link';
import BtnArrow from '../../svg/btnArrow';

const GetStartedOption = ({ optionParams }) => {
  const { title, backgroundColorClass, illustration, buttonText, buttonLink } =
    optionParams;

  return (
    <li
      className={`${backgroundColorClass} flex flex-col md:flex-row items-center md:items-start md:justify-between overflow-hidden`}
    >
      <div className="px-12 py-10 flex flex-col items-center md:items-start gap-7">
        <h4 className="font-semibold text-xl md:text-2xl text-center md:text-left">
          {title}
        </h4>
        <Link href={buttonLink}>
          <PrimaryButton type="button">
            <div className="flex items-center gap-2">
              {buttonText}
              <div className="w-[20px] h-[12px]">
                <BtnArrow />
              </div>
            </div>
          </PrimaryButton>
        </Link>
      </div>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 32 }}
        transition={{ type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        className="self-center pr-3 translate-y-8"
      >
        {illustration}
      </motion.div>
    </li>
  );
};

export default GetStartedOption;
