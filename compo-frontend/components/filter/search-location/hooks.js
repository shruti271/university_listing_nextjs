import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByNameAndLocation } from '../../../store/university/universitySlice';

export const useSearchLocation = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(filterByNameAndLocation(searchValue));
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return [searchValue, handleSearchChange, handleSubmit];
};
