import { TabPanel } from "../../core/CustomMUIComponents";
import MajorUniversitiesFilter from "./major-uni-filter";
import MajorUniversities from "./major-uni-section";

const MajorUniTab = ({ changeTab }) => {
  return (
    <div className="grid grid-cols-8 gap-2 sm:gap-4 container mx-auto">
      <div className="col-span-8 sm:col-span-4 lg:col-span-3 ">
        <TabPanel value={changeTab} index={1} padding={3}>
          <MajorUniversitiesFilter />
        </TabPanel>
      </div>
      <div className="col-span-8 sm:col-span-4 lg:col-span-5  ">
        <TabPanel value={changeTab} index={1} padding={3}>
          <MajorUniversities />
        </TabPanel>
      </div>
    </div>
  );
};

export default MajorUniTab;
