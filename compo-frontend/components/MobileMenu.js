import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import closeIcon from '../assets/close-icon.svg';
import PrimaryButton from './PrimaryButton';

const MobileMenu = ({ className = '', handleMobileMenuClick, isMenuOpen }) => {
  const router = useRouter();
  const setActiveLink = (path) => {
    return router.pathname === path ? 'text-[#06040A]' : 'text-[#544E5D]';
  };

  return (
    <>
      {isMenuOpen && (
        <div
          onClick={handleMobileMenuClick}
          className="fixed w-screen h-screen left-0 top-0 z-40 bg-colorPrimary opacity-20 lg:hidden"
        ></div>
      )}
      <div
        className={`lg:hidden p-4 pt-10 w-10/12 fixed z-50 right-0 top-0 h-screen transition-transform duration-300 bg-colorWhite border-l ${className}`}
      >
        <div className="relative w-6 h-6 mb-28 ml-auto">
          <button type="button" className="" onClick={handleMobileMenuClick}>
            <Image src={closeIcon} alt="Close Icon" layout="fill" priority />
          </button>
        </div>
        <nav className="">
          <ul className="flex flex-col items-center gap-6 text-xl">
            <li
              className={`${setActiveLink('/')}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${setActiveLink('/universities')}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/universities">Universities</Link>
            </li>
            <li
              className={`${setActiveLink('/scholarships')}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/scholarships">Scholarships</Link>
            </li>
            <li
              className={`${setActiveLink('/majors')}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/majors">Majors</Link>
            </li>
            <li
              className={`${setActiveLink('/articles')}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/articles">Articles</Link>
            </li>
            <li className={`md:hidden`} onClick={handleMobileMenuClick}>
              <Link href="/signin" passHref>
                <PrimaryButton type="button" isPrimary={false}>
                  Sign In
                </PrimaryButton>
              </Link>
            </li>
            <li className={`md:hidden`} onClick={handleMobileMenuClick}>
              <Link href="/signup" passHref>
                <PrimaryButton type="button">Join Now</PrimaryButton>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
