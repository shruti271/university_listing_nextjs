import { TabPanel } from "../../core/CustomMUIComponents";
import MajorOverview from "./major-overview";
import MajorOverviewCard from "./major-overview-card";
import majorImage from "../../../assets/major-img.png";
import majorImage1 from "../../../assets/major-img1.png";
import MajorRecentCard from "./major-recent-card";

const MajorOverviewTab = ({ changeTab }) => {
  return (
    <>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-8 sm:col-span-4 lg:col-span-8 sm:mt-2">
          <TabPanel value={changeTab} index={0} padding={3}>
            <MajorOverview />
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
            <MajorOverviewCard />
          </TabPanel>
        </div>
      </div>

      <TabPanel value={changeTab} index={0}>
      <div className="mt-14">

        <div className="font-bold text-2xl leading-[120%]	text-[#000000]">
          Recently added majors
        </div>
        {[majorImage, majorImage1, majorImage1]?.map((itm) => (
          <MajorRecentCard itm={itm} />
        ))}

      </div>
          </TabPanel>
    </>
  );
};

export default MajorOverviewTab;
