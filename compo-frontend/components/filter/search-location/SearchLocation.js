import { useSearchLocation } from './hooks';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import countries from 'countries-list';
import CardInteractive from '../shared/card-interactive/CardInteractive';

const countryCodes = Object.keys(countries.countries);
const countryNames = countryCodes.map((code) => countries.countries[code].name);
countryNames.sort();

const SearchLocation = ({ className = '' }) => {
  const [countryName, handleSelectChange] = useSearchLocation();

  return (
    <CardInteractive
      cardTitle="Location"
      bottomComponent={
        <FormControl fullWidth>
          <InputLabel id="select-small">Country</InputLabel>

          <Select
            labelId="select-small"
            className="w-full"
            onChange={handleSelectChange}
            label="Country"
          >
            <MenuItem value="">All</MenuItem>
            {countryNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      }
    />
  );
};

export default SearchLocation;
