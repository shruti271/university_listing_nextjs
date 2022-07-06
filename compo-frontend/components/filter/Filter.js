import Cost from './cost/Cost';
import InstituteType from './institute-type/InstituteType';
import SearchLocation from './search-location/SearchLocation';

const Filter = () => {
  return (
    <div className="flex flex-col space-y-4">
      <SearchLocation />
      <InstituteType />
      <Cost />
    </div>
  );
};

export default Filter;
