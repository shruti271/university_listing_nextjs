import React, { useState } from "react";
import { Box, Tab } from "@mui/material";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";

import {
  CustomProgramTab,
  a11yProps,
  TabPanel,
} from "../../components/core/CustomMUIComponents";
import ProgramHeader from "../../components/sections/program-section/program-header";
import ProgramOverviewCard from "../../components/sections/program-section/program-overview-card";
import ProgramOverviewTab from "../../components/sections/program-section/program-overview-tab";
import ProgramUniTab from "../../components/sections/program-section/program-uni-tab";

export default function Programs() {
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
                  changeTab === 0 ? "col-span-12" : "col-span-12 lg:col-span-9"
                }`}
              >
                <ProgramHeader />
              </div>
            </div>
            <div className="grid grid-cols-8">
              <div
                className={`col-span-8 ${
                  changeTab === 0 ? "lg:col-span-8" : "lg:col-span-5"
                }`}
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <CustomProgramTab
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
                  </CustomProgramTab>
                </Box>
              </div>
            </div>
            <ProgramOverviewTab changeTab={changeTab} />
            <ProgramUniTab changeTab={changeTab} />
          </div>

          <div className="col-span-4 xl:col-span-3 mt-[130px] hidden lg:block ">
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
      </div>

      <NewsletterSection />
      <Footer />
    </>
  );
}
