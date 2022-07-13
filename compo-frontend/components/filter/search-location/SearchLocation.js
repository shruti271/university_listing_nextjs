import CardWrapper from '../shared/card-wrapper/CardWrapper';
import FilterTitle from '../shared/filter-title/FilterTitle';
import { useSearchLocation } from './hooks';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import countries from 'countries-list';

const countryCodes = Object.keys(countries.countries);
const countryNames = countryCodes.map((code) => countries.countries[code].name);
countryNames.sort();

const SearchLocation = ({ className = '' }) => {
  const [countryName, handleSelectChange] = useSearchLocation();
  return (
    <CardWrapper>
      <FilterTitle>Location</FilterTitle>
      <div className="px-8 pt-5 pb-8">
        <form autoComplete="off">
          <Select
            value={countryName}
            className="w-full"
            onChange={handleSelectChange}
            placeholder="Location"
          >
            <MenuItem value="">All</MenuItem>
            {countryNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </form>
      </div>
    </CardWrapper>
  );
};

export default SearchLocation;
