import Image from 'next/image';

import CompositeLogo from '../assets/composite-logo.svg';
import FacebookLogo from './svg/FacebookLogo';
import YoutubeLogo from './svg/YoutubeLogo';
import LinkedinLogo from './svg/LinkedinLogo';
import TwitterLogo from './svg/TwitterLogo';
import InstagramLogo from './svg/InstagramLogo';
import Link from 'next/link';

const socials = [
  {
    id: 1,
    logo: <FacebookLogo />,
    link: 'https://facebook.com/',
  },
  {
    id: 2,
    logo: <YoutubeLogo />,
    link: 'https://facebook.com/',
  },
  {
    id: 3,
    logo: <TwitterLogo />,
    link: 'https://facebook.com/',
  },
  {
    id: 4,
    logo: <LinkedinLogo />,
    link: 'https://facebook.com/',
  },
  {
    id: 5,
    logo: <InstagramLogo />,
    link: 'https://facebook.com/',
  },
];

const Footer = () => {
  return (
    <footer className="pt-20 text-sm bg-colorWhite">
      <div className="container pb-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20 lg:gap-10 2xl:justify-start 2xl:gap-20">
          <div className="flex flex-col items-start gap-10 max-w-[420px] ">
            <div className="w-[220px] h-[50px] relative">
              <Image src={CompositeLogo} alt="Composite logo" layout="fill" />
            </div>
            {/* <p>
              Composite is a Website lorem ipsum dolor sit met, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p> */}
            <nav>
              <ul className="flex items-center flex-wrap">
                {socials &&
                  socials.map((social) => (
                    <Link key={social.id} href={social.link}>
                      <a target="_blank">
                        <li className="hover:bg-[#E8E8FF] p-4 rounded-xl transition-colors duration-300 footer-link">
                          <div className="w-5 h-5">{social.logo}</div>
                        </li>
                      </a>
                    </Link>
                  ))}
              </ul>
            </nav>
          </div>
          <ul className="hidden md:flex flex-wrap justify-between w-full gap-4">
            <li>
              <h4 className="font-semibold text-xl mb-5">Composite</h4>
              <ul className="flex flex-col items-start gap-3">
                <li>Home</li>
                <li>Universities</li>
                <li>Programs</li>
                <li>Scholarships</li>
                <li>Articles</li>
              </ul>
            </li>
            <li>
              <h4 className="font-semibold text-xl mb-5">Universities</h4>
              <ul className="flex flex-col items-start gap-3">
                <li>Universities by Rank</li>
                <li>Universities by Location</li>
                <li>Universities by Acceptance</li>
              </ul>
            </li>
            <li>
              <h4 className="font-semibold text-xl mb-5">Scholarships</h4>
              <ul className="flex flex-col items-start gap-3">
                <li>Global Scholarships</li>
                <li>Country Specific Scholarships</li>
                <li>Scholarships for STEM</li>
                <li>Scholarships for Women</li>
                {/* <li>College Freshmen</li>
                <li>Master Degree Scholarships</li> */}
              </ul>
            </li>
            <li>
              <h4 className="font-semibold text-xl mb-5"> For Institutions</h4>
              <ul className="flex flex-col items-start gap-3">
                <li>University Partnership</li>
                <li>Scholarship Partnership</li>
                <li>Government Partnership</li>

              </ul>
            </li>
            <li>
              <h4 className="font-semibold text-xl mb-5">
                Get in Touch with Us
              </h4>
              <ul className="flex flex-col items-start gap-3">
                {/* <li>Address</li>
                <li>+123 345123 556</li> */}
                <li>contact@composite.digital</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-10 text-center border-t">
        Composite - © 2022 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
