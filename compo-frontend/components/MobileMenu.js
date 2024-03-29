import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import * as React from 'react';
import closeIcon from '../assets/close-icon.svg';
import PrimaryButton from './PrimaryButton';
import AuthModal from './core/AuthModal';
import { AuthTypeModal } from "./core/Enum";

const MobileMenu = ({ className = '', handleMobileMenuClick, isMenuOpen }) => {
  const [accessToken, setAccessToken] = React.useState();


  const [authTypeModal, setauthTypeModal] = React.useState();

  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const setActiveLink = (path) => {
    return router.pathname === path ? "text-[#06040A]" : "text-[#544E5D]";
  };

  useEffect(() => {


    const getAccessToken = localStorage.getItem("access_token");
    setAccessToken(getAccessToken);

  }, [(typeof window !== "undefined") && localStorage.getItem("access_token")])
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
              className={`${setActiveLink("/")}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${setActiveLink("/universities")}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/universities">Universities</Link>
            </li>
            <li
              className={`${setActiveLink("/scholarships")}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/scholarships">Scholarships</Link>
            </li>
            <li
              className={`${setActiveLink("/programs")}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/programs">Programs</Link>
            </li>
            <li
              className={`${setActiveLink("/articles")}`}
              onClick={handleMobileMenuClick}
            >
              <Link href="/articles">Articles</Link>
            </li>
            {!accessToken && <li className={`md:hidden`} onClick={handleMobileMenuClick}>
              <PrimaryButton
                type="button"
                isPrimary={false}
                onClick={() => {
                  setOpen(true), setauthTypeModal(AuthTypeModal.Signin);
                }}
              >
                Sign In
              </PrimaryButton>
            </li>}
            {!accessToken && <li className={`md:hidden`} onClick={handleMobileMenuClick}>
              <PrimaryButton
                className="btn-shadow"
                type="button"
                onClick={() => {
                  setOpen(true), setauthTypeModal(AuthTypeModal.Signup);
                }}
              >
                Join Now
              </PrimaryButton>
            </li>}

            {accessToken && <li className={`md:hidden`} onClick={handleMobileMenuClick}>
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
            </li>}
          </ul>
          <AuthModal
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
            authTypeModal={authTypeModal}
            setauthTypeModal={setauthTypeModal}
          />
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
