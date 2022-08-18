import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";
import ArtBg from "../../assets/universities-page/hero-section/hero-bg.jpg";
import DirectoryHero from "../../components/DirectoryHero/DirectoryHero";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DesignTool from "../../components/sections/articles-section/DesignTool";
import { CustomArticleTextField } from "../../components/core/CustomMUIComponents";
import SignupCard from "../../components/SignupCard";

const Articles = () => {
  const Topics = [
    "#technology",
    "#lifeandlove",
    "#essentialism",
    "#webdevelopment",
    "#webdevelopment",
    "#lifestyle",
    "#architecture",
    "#sports",
    "#technology",
    "#lifeandlove",
    "#essentialism",
    "#webdevelopment",
    "#webdevelopment",
    "#lifestyle",
    "#architecture",
    "#sports",
  ];
  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28">
        <DirectoryHero bgImg={ArtBg.src} title="Articles" />
        <div className="container mt-20">
          <div className="w-[95%] sm:w-[75%] items-center mx-auto">
            <CustomArticleTextField
              id="outlined-search"
              label="Find the topics you care about"
              type="search"
              className="w-full"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start" className="cursor-pointer">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        <div className="container mt-12 mb-12 md:mb-20 lg:mb-24 ">
          <div className="w-[90%] mx-auto flex flex-wrap gap-2 md:gap-4 items-center justify-start sm:justify-center">
            {Topics?.map((itm) => (
              <div
                className="w-[auto] p-2 border rounded-xl font-normal text-sm md:text-base text-center text-[#000000]"
                key={itm}
              >
                {itm}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-8 gap-12 mb-12 container">
          <div className="col-span-8 md:col-span-5">
            <div>
              <p className="font-bold text-2xl md:text-3xl leading-[40px] md:leading-[54px] text-[#232E52] mb-4">
                Design Tools
              </p>
              {[0, 1, 2]?.map((itm) => (
                <div className="border-t-2 border-[#EBF2FE] ">
                  <DesignTool />
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-16">
              <p className="font-bold text-2xl md:text-3xl leading-[40px] md:leading-[54px] text-[#232E52] mb-4">
                Weekly Updates
              </p>
              {[0, 1, 2]?.map((itm) => (
                <div className="border-t-2 border-[#EBF2FE] ">
                  <DesignTool />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-8 md:col-span-3 auth-cover !bg-cover rounded-xl animate__animated animate__zoomIn relative h-[500px] sm:h-[650px] ">
            <SignupCard />
          </div>
        </div>

        <NewsletterSection />
      </div>
      <Footer />
    </>
  );
};

export default Articles;
