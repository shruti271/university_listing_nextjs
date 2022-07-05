import { useEffect, useState } from 'react';
import { filterUniversitiesByLocation } from '../../../store/university/universitySlice';
import { useDispatch } from 'react-redux';

export const useSearchLocation = (initialValue) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const filterByLocation = (location) =>
    dispatch(filterUniversitiesByLocation(location));

  useEffect(() => {
    filterByLocation(searchValue);
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return [searchValue, handleSearchChange, handleSubmit];
};
