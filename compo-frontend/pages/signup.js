import Image from "next/image";
import CoverImage from "../assets/login.png";
import emailIcon from "../assets/dashicons_email.svg";
import passwordIcon from "../assets/dashicons_password.svg";
import googleIcon from "../assets/googleIcon.svg";
import fbIcon from "../assets/fbIcon.svg";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        style={{ height: "100vh" }}
      >
        <div
          className="p-4 cover-image hidden sm:block animate__animated animate__zoomIn"
          style={{ height: "calc(100vh - 30px)" }}
        >
          <Image src={CoverImage} alt="CoverImage" />
        </div>
        <div className="p-4 ml-0 sm:ml-4 md:ml-4 lg:ml-12 animate__animated animate__zoomIn">
          <h3 className="pb-2 mt-8 sm:mt-32 font-semibold text-2xl text-[#03014C] flex justify-center sm:block">
            Sign up to Compoisite
          </h3>
          <div className="mt-4 sm:mt-8">
            <form>
              <div className="flex flex-col">
                <div className="flex justify-center sm:block">
                  <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                    <Image src={emailIcon} alt="emailIcon" />
                    <input
                      type="email"
                      className="form-control
                                block
                                ml-4
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding w-full                                       
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-transparent focus:border-b-gray-300 focus:outline-none focus:ring-0"
                      id="floatingInput"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="floatingInput"
                      className="text-gray-700 ml-8"
                    >
                      Email address
                    </label>
                  </div>
                </div>
                <div className="flex justify-center sm:block">
                  <div className="form-floating mb-6 border-b border-solid border-gray-300 flex items-center justify-start w-3/4 md:w-5/6 lg:w-3/4">
                    <Image src={passwordIcon} alt="passwordIcon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              ml-4
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-transparent focus:border-b-gray-300 focus:outline-none focus:ring-0"
                      id="floatingInput"
                      placeholder="password"
                    />
                    <div
                      onClick={() => setShowPassword((show) => !show)}
                      className="mt-4 inline-block px-3 py-2 text-balck-100 font-medium text-xs leading-tight rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="eye"
                          className="w-8 h-4"
                          role="img"
                        >
                          <path
                            fill="currentColor"
                            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="eye-slash"
                          className="w-8 h-4"
                          role="img"
                        >
                          <path
                            fill="currentColor"
                            d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                          />
                        </svg>
                      )}
                    </div>

                    <label
                      htmlFor="floatingInput"
                      className="text-gray-700 ml-8"
                    >
                      Password
                    </label>
                  </div>
                </div>

                <div className="flex justify-center sm:block">
                  <button
                    className="bg-[#0364FF] text-gray-100 p-4 w-3/4 md:w-5/6 lg:w-3/4 rounded-xl tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline 
                  shadow-lg"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center sm:block">
              <div className="mt-6 sm:mt-12 gap-6 justify-between items-center flex-row  w-3/4 md:w-5/6 lg:w-3/4 block lg:flex">
                <button className="social-icon w-full text-black focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border">
                  <Image
                    src={googleIcon}
                    alt="back"
                    width={20}
                    height={20}
                    layout="fixed"
                  />
                  Sign in with Google
                </button>

                <button className="social-icon w-full text-black focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border mt-4 lg:mt-0">
                  <Image
                    src={fbIcon}
                    alt="back"
                    width={20}
                    height={20}
                    layout="fixed"
                  />
                  Sign in with Facebook
                </button>
              </div>
            </div>
            <div className="flex justify-center sm:justify-between items-center mb-6  w-full md:w-5/6 lg:w-3/4 mt-6 sm:mt-8 whitespace-nowrap">
              <div className="ml-0 sm:ml-auto">
                Already have an account?
                <Link href="/signin">
                  <a className="cursor-pointer text-[#0364FF] ml-1 font-bold">
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
