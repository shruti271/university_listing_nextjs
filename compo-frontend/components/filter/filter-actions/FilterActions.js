import { useDispatch } from 'react-redux';
import { resetFilter } from '../../../store/university/universitySlice';

const FilterActions = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetFilter());
  };

  return (
    <div className="mb-2">
      <button
        className="bg-colorPrimary px-5 py-1 rounded-md text-colorWhite"
        onClick={handleClick}
      >
        Reset
      </button>
    </div>
  );
};

export default FilterActions;
