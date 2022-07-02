import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SmallArrow from '../../svg/SmallArrow';

const FeaturesListItem = ({ title, description }) => {
  const [isItemOpen, setItemOpen] = useState(false);

  const handleItemClick = () => setItemOpen(!isItemOpen);

  const arrowFillColor = isItemOpen ? '#0364FF' : '#000';
  const arrowRotation = isItemOpen ? '-rotate-90' : '';
  const itemShadow = isItemOpen ? 'features-list-item--active' : '';
  const titleColor = isItemOpen ? 'text-colorPrimary' : '';

  return (
    <li
      className={`p-8 flex items-center justify-between cursor-pointer shadow-sm md:hover:shadow-md transition-shadow duration-200 ${itemShadow}`}
      onClick={handleItemClick}
    >
      <div>
        <h4 className={`font-semibold text-xl md:text-2xl mb-4 ${titleColor}`}>
          {title}
        </h4>
        <AnimatePresence>
          {isItemOpen && (
            <motion.p
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm md:text-base origin-top"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <button
        type="button"
        className={`w-10 h-[10px] transition-transform duration-300 ${arrowRotation}`}
      >
        <SmallArrow fill={arrowFillColor} />
      </button>
    </li>
  );
};

export default FeaturesListItem;
