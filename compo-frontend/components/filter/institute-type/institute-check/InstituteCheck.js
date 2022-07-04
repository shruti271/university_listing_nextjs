import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InstituteCheck = ({ label = '', initialState = false }) => {
  const [isChecked, setIsChecked] = useState(initialState);
  const id = uuidv4();

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div class="flex items-center">
      <input
        checked={isChecked}
        onChange={handleOnChange}
        id={id}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
      />
      <label
        for={id}
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
