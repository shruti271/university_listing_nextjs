import { TabPanel } from "../../core/CustomMUIComponents";
import ProgramUniversitiesFilter from "./program-uni-filter";
import ProgramUniversities from "./program-uni-section";

const ProgramUniTab = ({ changeTab }) => {
  return (
    <div className="grid grid-cols-8 gap-2 sm:gap-4">
      <div className="lg:col-span-3 hidden lg:block">
        <TabPanel value={changeTab} index={1} padding={3}>
          <ProgramUniversitiesFilter />
        </TabPanel>
      </div>
      <div className="col-span-8 lg:col-span-5">
        <TabPanel value={changeTab} index={1} padding={3}>
          <ProgramUniversities />
        </TabPanel>
      </div>
    </div>
  );
};

export default ProgramUniTab;
