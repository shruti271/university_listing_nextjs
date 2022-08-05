import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as React from "react";
import Router from "next/router";

import HamburgerIcon from "../assets/hamburger-icon.svg";
import CompositeLogo from "../assets/composite-logo.svg";
import SearchIcon from "../assets/search-icon.svg";
import MobileMenu from "./MobileMenu";
import PrimaryButton from "./PrimaryButton";
import AuthModal from "../components/core/AuthModal";
import { AuthTypeModal } from "./core/Enum";

const Header = ({ modalType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const mobileMenuStyle = isMenuOpen ? "translate-x-0" : "translate-x-full";
  const handleMobileMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const [authTypeModal, setauthTypeModal] = React.useState();

  const [open, setOpen] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState();

  const router = useRouter();

  const setActiveLink = (path) => {
    return router.pathname === path
      ? "text-[#06040A] hover:text-[#06040A]"
      : "text-[#544E5D] hover:opacity-50";
  };

  useEffect(() => {
    {
      modalType === "signin" && setOpen(true), setauthTypeModal("signin");
    }
  }, [modalType]);

  useEffect(() => {
    const getAccessToken = localStorage.getItem("access_token");
    setAccessToken(getAccessToken);
  }, [typeof window !== "undefined" && localStorage.getItem("access_token")]);

  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        className={`${mobileMenuStyle}`}
        handleMobileMenuClick={handleMobileMenuClick}
      />
      <header className="header py-7 absolute w-full left-0 top-0 z-20 bg-colorWhite">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="logo-container relative h-10 w-36 cursor-pointer">
              <Image src={CompositeLogo} alt="Composite Logo" layout="fill" />
            </div>
          </Link>
          <div className="flex items-center gap-8 lg:hidden">
            <div className="hidden md:block">
              {!accessToken && (
                <>
                  <PrimaryButton
                    type="button"
                    isPrimary={false}
                    onClick={() => {
                      setOpen(true), setauthTypeModal(AuthTypeModal.Signin);
                    }}
                  >
                    Sign In
                  </PrimaryButton>

                  <PrimaryButton
                    className="btn-shadow"
                    type="button"
                    onClick={() => {
                      setOpen(true), setauthTypeModal(AuthTypeModal.Signup);
                    }}
                  >
                    Join Now
                  </PrimaryButton>
                </>
              )}

              {accessToken && (
                <PrimaryButton
                  isPrimary={false}
                  type="button"
                  onClick={() => {
                    localStorage.clear();
                    setAccessToken("");
                  }}
                >
                  Log Out
                </PrimaryButton>
              )}
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
                <li className={`${setActiveLink("/")} text-sm xl:text-base`}>
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`${setActiveLink(
                    "/universities"
                  )} text-sm xl:text-base`}
                >
                  <Link href="/universities">Universities</Link>
                </li>
                <li
                  className={`${setActiveLink(
                    "/scholarships"
                  )} text-sm xl:text-base`}
                >
                  <Link href="/scholarships">Scholarships</Link>
                </li>
                <li
                  className={`${setActiveLink("/programs")} text-sm xl:text-base`}
                >
                  <Link href="/programs">Programs</Link>
                </li>
                <li
                  className={`${setActiveLink(
                    "/articles"
                  )} text-sm xl:text-base`}
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
                {!accessToken && (
                  <>
                    <PrimaryButton
                      type="button"
                      isPrimary={false}
                      onClick={() => {
                        setOpen(true), setauthTypeModal(AuthTypeModal.Signin);
                      }}
                    >
                      Sign In
                    </PrimaryButton>

                    <PrimaryButton
                      className="btn-shadow"
                      type="button"
                      onClick={() => {
                        setOpen(true), setauthTypeModal(AuthTypeModal.Signup);
                      }}
                    >
                      Join Now
                    </PrimaryButton>
                  </>
                )}

                {accessToken && (
                  <PrimaryButton
                    isPrimary={false}
                    type="button"
                    onClick={() => {
                      localStorage.clear();
                      setAccessToken("");
                    }}
                  >
                    Log Out
                  </PrimaryButton>
                )}
              </ul>

              <AuthModal
                open={open}
                handleClose={() => {
                  setOpen(false);
                }}
                authTypeModal={authTypeModal}
                setauthTypeModal={setauthTypeModal}
              />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
