import Profile from "../../components/sections/dashboard-section/profile.js";
import Activities from "../../components/sections/dashboard-section/activities.js";
import UpgradeAccount from "../../components/sections/dashboard-section/upgrade-account.js";
import CompleteProfileCard from "../../components/sections/dashboard-section/CompleteProfileCard.js";
import DashboardMiddleSection from "../../components/sections/dashboard-section/DashboardMiddleSection.js";
import Admissions from "../../components/sections/dashboard-section/Admissions.js";
import Majors from "../../components/sections/dashboard-section/Majors.js";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Header from "../../components/Header.js";
export default function Dashboard() {
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1240: {
      items: 4,
    },
  };

  const items = [<Activities />, <Admissions />, <Majors />];
  const renderNextButton = () => {
    return (
      <ArrowForwardIosIcon style={{ position: "absolute", right: 0, top: 0 }} />
    );
  };

  const renderPrevButton = () => {
    return (
      <ArrowBackIosIcon style={{ position: "absolute", left: 0, top: 0 }} />
    );
  };
  return (
    <div className="bg-[#FBFBFB]">
      <Header />
      <div className="grid grid-cols-12 gap-4 container mt-[112px]">
        <div className="col-span-12 sm:col-span-5 lg:col-span-3 ">
          <Profile />
          <Activities />
          <UpgradeAccount />
        </div>
        {/* <div className="col-span-12  sm:hidden">
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={5000}
            animationDuration={1500}
            disableDotsControls
            // disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          />
        </div> */}
        <div className="col-span-12 sm:col-span-7 lg:col-span-6 ">
          <CompleteProfileCard />
          <DashboardMiddleSection />
        </div>

        <div className="col-span-12 sm:col-span-12 lg:col-span-3">
          <div className="grid grid-cols-12">
            <Admissions />
            <Majors />
          </div>
        </div>
      </div>
    </div>
  );
}
