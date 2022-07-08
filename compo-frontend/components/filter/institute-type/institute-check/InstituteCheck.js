import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { filterUniversitiesByType } from '../../../../store/university/universitySlice';

const InstituteCheck = ({ label = '', state = false, value = 'public' }) => {
  const [isChecked, setIsChecked] = useState(state);
  const id = uuidv4();

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        checked={isChecked}
        onChange={handleOnChange}
        id={id}
        type="checkbox"
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
      />
      <label
        htmlFor={id}
        className={`ml-2 text-sm font-medium ${
          isChecked ? 'text-colorPrimary' : 'text-colorBlack'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InstituteCheck;
