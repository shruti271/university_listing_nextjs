import * as React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";
import { Box, Tab } from "@mui/material";

import {
  CustomMajorsTab,
  a11yProps,
  TabPanel,
} from "../../components/core/CustomMUIComponents";
import { useState } from "react";
import MajorUniversities from "../../components/sections/major-section/major-uni-section";
import MajorUniversitiesFilter from "../../components/sections/major-section/major-uni-filter";
import MajorOverview from "../../components/sections/major-section/major-overview";
import MajorOverviewCard from "../../components/sections/major-section/major-overview-card";
import MajorHeader from "../../components/sections/major-section/major-header";

export default function Majors() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="pb-20">
        <Header />

        <MajorHeader />
        <div className="grid grid-cols-8  container mx-auto">
          <div className="col-span-8 lg:col-span-5 container mx-auto">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <CustomMajorsTab
                variant="scrollable"
                scrollButtons={false}
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
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
        <div className="grid grid-cols-8 gap-2 container mx-auto">
          <div className="col-span-8 sm:col-span-4 lg:col-span-5 sm:mt-8">
            <TabPanel value={value} index={0} padding={3}>
              <MajorOverview />
            </TabPanel>
          </div>

          <div className="col-span-8 sm:col-span-4 lg:col-span-3 sm:mt-8 p-2 lg:relative lg:top-[-33%]">
            <TabPanel value={value} index={0} className="border" padding={3}>
              <MajorOverviewCard />
            </TabPanel>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-2 sm:gap-4 container mx-auto">
          <div className="col-span-8 sm:col-span-4 lg:col-span-3 ">
            <TabPanel value={value} index={1} padding={3}>
              <MajorUniversitiesFilter />
            </TabPanel>
          </div>
          <div className="col-span-8 sm:col-span-4 lg:col-span-5  ">
            <TabPanel value={value} index={1} padding={3}>
              <MajorUniversities />
            </TabPanel>
          </div>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
}
