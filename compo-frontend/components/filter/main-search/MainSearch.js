import CardInteractive from '../shared/card-interactive/CardInteractive';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterMainSearch } from '../../../store/university/universitySlice';

const MainSearch = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(filterMainSearch(query));
  }, [query]);

  return (
    <CardInteractive
      cardTitle="Search"
      bottomComponent={
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          className="w-full"
          onChange={handleChange}
          value={query}
        />
      }
    />
  );
};

export default MainSearch;
