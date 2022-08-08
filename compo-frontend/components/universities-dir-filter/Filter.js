import FilterActions from './filter-actions/FilterActions';
import MainSearch from './main-search/MainSearch';
import RankOrder from './rank-order/RankOrder';
import SearchLocation from './search-location/SearchLocation';
import StudentPopulation from './StudentPopulation/StudentPopulation';

const Filter = () => {
  return (
    <div className="flex flex-col space-y-4">
      <FilterActions />
      <MainSearch />
      <SearchLocation />
      <StudentPopulation />
      <RankOrder />
    </div>
  );
};

export default Filter;
