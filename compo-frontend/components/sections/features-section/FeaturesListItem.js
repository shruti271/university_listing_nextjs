import { useState } from 'react';

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
        {isItemOpen && <p className="text-sm md:text-base">{description}</p>}
      </div>
      <button
        type="button"
        className={`w-10 h-[10px] transition-transform ${arrowRotation}`}
      >
        <SmallArrow fill={arrowFillColor} />
      </button>
    </li>
  );
};

export default FeaturesListItem;
