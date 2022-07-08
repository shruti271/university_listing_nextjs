import CampusSetting from './campus-setting/CampusSetting';
import CollegeType from './CollegeType/CollegeType';
import Cost from './cost/Cost';
import InstituteType from './institute-type/InstituteType';
import Majors from './majors/Majors';
import SearchLocation from './search-location/SearchLocation';
import Selectivity from './selectivity/Selectivity';
import StudentPopulation from './StudentPupulation/StudentPopulation';

const Filter = () => {
  return (
    <div className="flex flex-col space-y-4">
      <SearchLocation />
      <InstituteType />
      <Cost />
      <Majors />
      <Selectivity />
      <CampusSetting />
      <StudentPopulation />
      <CollegeType />
    </div>
  );
};

export default Filter;
