import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsletterSection from "../../components/sections/newsletter-section/NewsletterSection";
import ArtDetailBg from "../../assets/article-detail-hero-bg.png";
import DirectoryHero from "../../components/DirectoryHero/DirectoryHero";
import Avatar from "@mui/material/Avatar";
import ArtProfile from "../../assets/art-profile.jpg";
import Image from "next/image";
import ArtSS1 from "../../assets/art-ss-1.png";
import ArtSS2 from "../../assets/art-ss-2.png";

const ArticleDetails = () => {
  return (
    <>
      <Header />
      <div className="bg-colorPale pb-20 md:pb-28">
        <DirectoryHero bgImg={ArtDetailBg.src} title="Article-Detail" />
        <div className="container py-10">
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl !leading-[30px] sm:!leading-[40px] lg:!leading-[60px] text-[#000000]">
            Learn the hidden feature in Git - Stash
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <div className="bg-[#EBF3FF] rounded-lg p-2 font-normal text-sm text-[#000000]">
              #webdev
            </div>
            <div className="bg-[#FBEBFF] rounded-lg p-2 font-normal text-sm text-[#000000]">
              #git
            </div>
            <div className="bg-[#EFEBFF] rounded-lg p-2 font-normal text-sm text-[#000000]">
              #github
            </div>
            <div className="bg-[#FFFDEB] rounded-lg p-2 font-normal text-sm text-[#000000]">
              #javascript
            </div>
          </div>

          <div className="mt-8 gap-4 flex">
            <Avatar
              sx={{
                width: "50px",
                height: "50px",
              }}
            >
              <Image src={ArtProfile} alt="ArtProfile" layout="fill" />
            </Avatar>
            <div className="flex flex-col justify-center">
              <p className="font-black text-base text-[#000000]">John Doe</p>
              <p className="font-normal text-sm leading-[18px] opacity-50 text-[#000000]">
                May 12 Originally published at{" "}
                <span className="text-[#034AFF]"> boburjon.netlify.app </span> |
                3 min read
              </p>
            </div>
          </div>

          <p className="mt-9 w-[150px] sm:w-[175px] flex flex-wrap text-[#000000] font-normal text-md sm:text-lg md:text-xl font-['PT_Serif']">
            Lorem ipsum, everyone 👏
          </p>
          <p className="mt-6 flex flex-wrap text-[#000000] font-normal text-md sm:text-lg md:text-xl font-['PT_Serif']">
            Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus
            malesuada. Eu lacus dis et tempor non. Odio tristique dignissim
            lorem ipsum vestibulum. Cras quisque praesent.
          </p>
          <ol className="mt-6 font-normal text-md sm:text-lg md:text-xl text-[#000000] font-['PT_Serif'] ">
            <li>Lacinia ut gravida tempus sollicitudin;</li>
            <li>Terima kasih banyak;</li>
            <li>Lorem lorem lorem</li>
            <li>Something cool here goes</li>
          </ol>
          <p className="mt-4 font-bold text-xl sm:text-2xl leading-[38px] text-[#000000]">
            1. What is Stash
          </p>
          <p className="mt-3 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus
            malesuada. Eu lacus dis et tempor non. Odio tristique dignissim
            lorem ipsum vestibulum. Cras quisque praesent.
          </p>

          <p className="mt-6 font-bold text-xl sm:text-2xl leading-[38px] text-[#000000]">
            2. When to use Stash
          </p>
          <p className="mt-3 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus
            malesuada. Eu lacus dis et tempor non. Odio tristique dignissim
            lorem <span className="text-[#034AFF]"> ipsum.com </span>
            vestibulum. Cras quisque praesent.
          </p>

          <p className="mt-6 font-bold text-xl sm:text-2xl leading-[38px] text-[#000000]">
            3. How to use Stash
          </p>
          <p className="mt-1 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus
            malesuada. Eu lacus dis et tempor non. Odio
            <span className="ml-4 p-1 bg-[#EDEDED] rounded-lg text-sm text-[#000000]">
              index.html
            </span>
          </p>
          <p className="mt-1 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Mauris vestibulum mauris fermentum ultrices amet. Sed neque amet
            viverra nibh.
          </p>
          <p className="mt-1 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Tempus cras pretium ullamcorper nulla eu cursus gravida. Sed tellus
            sapien mauris.
          </p>

          {/* <div className="mt-5 w-full h-[225px] relative">
            <Image src={ArtSS1} layout="fill" className="object-cover" />
          </div> */}
          <div className="xyz mt-5"></div>
          <p className="mt-1 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Augue laoreet vulputate risus leo lacus consectetur. Sed vitae
            mollis ornare tincidunt arcu lorem auctor. Massa
            <span className="ml-4 p-1 bg-[#EDEDED] rounded-lg text-sm text-[#000000]">
              StyledComponents.js
            </span>
          </p>
          <p className="mt-1 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Proin est ullamcorper non felis sapien dignissim lectus. Varius
            dictumst.
          </p>
          <p className="mt-1 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Molestie commodo tincidunt ultrices quam ut faucibus. Tincidunt leo
            non ac dictum.
          </p>

          {/* <div className="mt-9 w-full h-[225px] relative">
            <Image src={ArtSS2} layout="fill" className="object-cover" />
          </div> */}
          <div className="abc mt-9"></div>

          <p className="mt-2 text-md sm:text-lg md:text-xl text-[#000000] font-normal font-['PT_Serif']">
            Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus
            malesuada. Eu lacus dis et tempor non. Odio tristique dignissim
            lorem ipsum vestibulum. Cras quisque praesent.
          </p>

          <div className="mt-20 pb-10 ">
            <p className="font-bold text-2xl leading-[36px] text-[#000000]">
              Read next
            </p>
            <div className="mt-4 gap-4 flex">
              <Avatar
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              >
                <Image src={ArtProfile} alt="ArtProfile" layout="fill" />
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-base text-[#000000]">
                  3 Years of VueJS (2021) Link Only
                </p>
                <p className="font-normal text-sm leading-[21px] opacity-50 text-[#000000]">
                  Bobur Mavlonov - Apr 20
                </p>
              </div>
            </div>
            <div className="mt-7 gap-4 flex">
              <Avatar
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              >
                <Image src={ArtProfile} alt="ArtProfile" layout="fill" />
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-base text-[#000000]">
                  How to choose colors and fonts correctly for your website
                </p>
                <p className="font-normal text-sm leading-[21px] opacity-50 text-[#000000]">
                  Sundar Pichai - Apr 20
                </p>
              </div>
            </div>
            <div className="mt-7 gap-4 flex">
              <Avatar
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              >
                <Image src={ArtProfile} alt="ArtProfile" layout="fill" />
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-base text-[#000000]">
                  Does PHP still live in 2021 despite of Wordpress and Laravel?
                </p>
                <p className="font-normal text-sm leading-[21px] opacity-50 text-[#000000]">
                  Pavel Durov - Apr 20
                </p>
              </div>
            </div>
          </div>
        </div>
        <NewsletterSection />
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetails;
