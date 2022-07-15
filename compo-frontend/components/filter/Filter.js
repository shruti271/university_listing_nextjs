import MainSearch from './main-search/MainSearch';
import SearchLocation from './search-location/SearchLocation';
import StudentPopulation from './StudentPupulation/StudentPopulation';

const Filter = () => {
  return (
    <div className="flex flex-col space-y-4">
      <MainSearch />
      <SearchLocation />
      <StudentPopulation />
    </div>
  );
};

export default Filter;
