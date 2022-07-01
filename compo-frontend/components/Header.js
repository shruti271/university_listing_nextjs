import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import HamburgerIcon from '../assets/hamburger-icon.svg';
import CompositeLogo from '../assets/composite-logo.svg';
import SearchIcon from '../assets/search-icon.svg';
import MobileMenu from './MobileMenu';
import PrimaryButton from './PrimaryButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const mobileMenuStyle = isMenuOpen ? 'translate-x-0' : 'translate-x-full';
  const handleMobileMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const router = useRouter();
  const setActiveLink = (path) => {
    return router.pathname === path
      ? 'text-[#06040A] hover:text-[#06040A]'
      : 'text-[#544E5D] hover:opacity-50';
  };

  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        className={`${mobileMenuStyle}`}
        handleMobileMenuClick={handleMobileMenuClick}
      />
      <header className="header py-7 absolute w-full left-0 top-0 z-20">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="logo-container relative h-10 w-36 cursor-pointer">
              <Image src={CompositeLogo} alt="Composite Logo" layout="fill" />
            </div>
          </Link>
          <div className="flex items-center gap-8 lg:hidden">
            <div className="hidden md:block">
              <Link href="/signin">
                <PrimaryButton type="button" isPrimary={false}>
                  Sign In
                </PrimaryButton>
              </Link>
            </div>
            <div className="hidden md:block">
              <Link href="/signup">
                <PrimaryButton type="button">Join Now</PrimaryButton>
              </Link>
            </div>
            <button type="button" className="relative w-5 h-5">
              <Image src={SearchIcon} alt="Search" layout="fill" />
            </button>
            <button
              type="button"
              className="hamburger-container w-5 h-5 relative"
              onClick={handleMobileMenuClick}
            >
              <Image src={HamburgerIcon} alt="Hamburger Logo" layout="fill" />
            </button>
          </div>
          <nav className="hidden lg:block">
            <div className="flex items-center gap-5 xl:gap-12">
              <ul className="flex items-center gap-5 xl:gap-8">
                <li className={`${setActiveLink('/')} text-sm lg:text-base`}>
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`${setActiveLink(
                    '/universities'
                  )} text-sm lg:text-base`}
                >
                  <Link href="/universities">Universities</Link>
                </li>
                <li
                  className={`${setActiveLink(
                    '/scholarships'
                  )} text-sm lg:text-base`}
                >
                  <Link href="/scholarships">Scholarships</Link>
                </li>
                <li
                  className={`${setActiveLink('/majors')} text-sm lg:text-base`}
                >
                  <Link href="/majors">Majors</Link>
                </li>
                <li
                  className={`${setActiveLink(
                    '/articles'
                  )} text-sm lg:text-base`}
                >
                  <Link href="/articles">Articles</Link>
                </li>
                <li className={`pb-2`}>
                  <button type="button" className="relative w-5 h-5">
                    <Image src={SearchIcon} alt="Search" layout="fill" />
                  </button>
                </li>
              </ul>
              <ul className="flex items-center gap-3">
                <Link href="/signin">
                  <PrimaryButton type="button" isPrimary={false}>
                    Sign In
                  </PrimaryButton>
                </Link>
                <Link href="/signup">
                  <PrimaryButton className="btn-shadow" type="button">
                    Join Now
                  </PrimaryButton>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
