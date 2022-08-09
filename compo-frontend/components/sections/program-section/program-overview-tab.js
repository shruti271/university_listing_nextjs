import { TabPanel } from "../../core/CustomMUIComponents";
import ProgramOverview from "./program-overview";
import ProgramImage from "../../../assets/program-img.png";
import ProgramImage1 from "../../../assets/program-img1.png";
import ProgramRecentCard from "./program-recent-card";
import ProgramOverviewCard from "./program-overview-card";

const ProgramOverviewTab = ({ changeTab }) => {
  return (
    <>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-8 sm:col-span-4 lg:col-span-8 sm:mt-2">
          <TabPanel value={changeTab} index={0} padding={3}>
            <ProgramOverview />
          </TabPanel>
        </div>

        <div className="col-span-8 sm:col-span-4  sm:mt-8 p-2 lg:hidden">
          <TabPanel
            value={changeTab}
            index={0}
            className="border rounded"
            padding={3}
            style={{ boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.08)" }}
          >
            <ProgramOverviewCard />
          </TabPanel>
        </div>
      </div>

      <TabPanel value={changeTab} index={0}>
        <div className="mt-14">
          <div className="font-bold text-2xl leading-[120%]	text-[#000000]">
            Recently added majors
          </div>
          {[ProgramImage, ProgramImage1, ProgramImage1]?.map((itm) => (
            <ProgramRecentCard itm={itm} />
          ))}
        </div>
      </TabPanel>
    </>
  );
};

export default ProgramOverviewTab;
