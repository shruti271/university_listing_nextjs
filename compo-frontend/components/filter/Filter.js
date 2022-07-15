import FilterActions from './filter-actions/FilterActions';
import MainSearch from './main-search/MainSearch';
import SearchLocation from './search-location/SearchLocation';
import StudentPopulation from './StudentPupulation/StudentPopulation';

const Filter = () => {
  return (
    <div className="flex flex-col space-y-4">
      <FilterActions />
      <MainSearch />
      <SearchLocation />
      <StudentPopulation />
    </div>
  );
};

export default Filter;
