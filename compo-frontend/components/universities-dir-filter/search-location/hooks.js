import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByNameAndLocation,
  resetFilter,
  resetPage,
} from '../../../store/university/universitySlice';

export const useSearchLocation = () => {
  const [countryName, setCountryName] = useState('');
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const {
      target: { value },
    } = e;
    setCountryName(value);
    dispatch(resetPage());
  };

  useEffect(() => {
    dispatch(filterByNameAndLocation(countryName));
  }, [countryName]);

  return [countryName, handleSelectChange];
};
