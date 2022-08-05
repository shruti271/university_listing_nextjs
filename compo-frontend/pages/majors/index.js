import React, { useState } from "react";
import { Box, Tab } from "@mui/material";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";

import {
  CustomMajorsTab,
  a11yProps,
  TabPanel,
} from "../../components/core/CustomMUIComponents";
import MajorHeader from "../../components/sections/major-section/major-header";
import MajorOverviewCard from "../../components/sections/major-section/major-overview-card";
import MajorOverviewTab from "../../components/sections/major-section/major-overview-tab";
import MajorUniTab from "../../components/sections/major-section/major-uni-tab";

export default function Majors() {
  const [changeTab, setChangeTab] = useState(0);

  return (
    <>
      <div className="pb-20">
        <Header />

        <div className="grid grid-cols-12 container gap-4">
          <div
            className={`${
              changeTab === 0
                ? "col-span-12 lg:col-span-8 xl:col-span-9"
                : "col-span-12"
            }`}
          >
            <div className="grid grid-cols-12  ">

            <div
              className={`${
                changeTab === 0
                  ? "col-span-12"
                  : "col-span-12 lg:col-span-9"
              }`}
            >
              <MajorHeader />
            </div>
            </div>
            <div className="grid grid-cols-8">
              <div
                className={`col-span-8 ${
                  changeTab === 0 ? "lg:col-span-8" : "lg:col-span-5"
                }`}
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <CustomMajorsTab
                    variant="scrollable"
                    scrollButtons={false}
                    value={changeTab}
                    onChange={(event, newTab) => {
                      setChangeTab(newTab);
                    }}
                    aria-label="Majors Tabs"
                    setwidth="auto"
                    setjustifycontent="center"
                    className="w-full"
                  >
                    {[
                      "Overview",
                      "Universities offering this course",
                      "Announcements",
                    ].map((item, index) => (
                      <Tab key={index} label={item} {...a11yProps(index)} />
                    ))}
                  </CustomMajorsTab>
                </Box>
              </div>
            </div>
            <MajorOverviewTab changeTab={changeTab} />
            <MajorUniTab changeTab={changeTab} />
          </div>

          <div className="col-span-4 xl:col-span-3 mt-[130px] hidden lg:block ">
            <TabPanel
              value={changeTab}
              index={0}
              className="border rounded"
              padding={3}
              style={{boxShadow:"0px 0px 40px rgba(0, 0, 0, 0.08)"}}
            >
              <MajorOverviewCard />
            </TabPanel>
          </div>
        </div>


        
      </div>


      <NewsletterSection />
      <Footer />
    </>
  );
}
