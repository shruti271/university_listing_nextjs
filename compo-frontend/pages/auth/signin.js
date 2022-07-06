import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CoverImage from "../../assets/auth/login-cover.png";
import emailIcon from "../../assets/dashicons_email.svg";
import passwordIcon from "../../assets/dashicons_password.svg";
import googleIcon from "../../assets/googleIcon.svg";
import fbIcon from "../../assets/fbIcon.svg";
import showPassIcon from "../../assets/auth/show-pass.svg";
import hidePassIcon from "../../assets/auth/hide-pass.svg";
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2"
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
            Login to your account!
          </h3>
          <div className="mt-4 sm:mt-8">
            <form>
              <div className="flex flex-col">
                <div className="flex justify-center sm:block">
                   <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-6 w-3/4 md:w-5/6 lg:w-3/4 border-b">
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" className="w-full" />
      </Box>
                </div>
                <div className="flex justify-center sm:block">
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-6 w-3/4 md:w-5/6 lg:w-3/4">
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" className="w-full" InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <VisibilityOffIcon />
            </InputAdornment>
          ),
        }} />
      </Box>
                  {/* <div className="form-floating mb-6 border-b border-solid border-gray-300 flex items-center justify-start w-3/4 md:w-5/6 lg:w-3/4">
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
                      className="mt-4 inline-block px-3 py-2 text-balck-100 font-medium text-xs leading-tight rounded-xl focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                      {showPassword ? (
                        <Image
                          src={showPassIcon}
                          alt="show"
                          width={20}
                          height={20}
                          layout="fixed"
                        />
                      ) : (
                        <Image
                          src={hidePassIcon}
                          alt="hide"
                          width={20}
                          height={20}
                          layout="fixed"
                        />
                      )}
                    </div>

                    <label
                      htmlFor="floatingInput"
                      className="text-gray-700 ml-8"
                    >
                      Password
                    </label>
                  </div> */}
                </div>
                <div className="flex justify-center sm:block">
                  <div className="flex justify-end mb-6 sm:mb-12 w-3/4 md:w-5/6 lg:w-3/4">
                    <Link href="/auth/forgot-password">
                      <span className="text-[#544E5D] ml-auto opacity-50 cursor-pointer">
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center sm:block">
                  <button
                    className="bg-[#0364FF] text-gray-100 p-4 w-3/4 md:w-5/6 lg:w-3/4 rounded-xl tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline 
                  shadow-lg"
                  >
                    Login to Continue
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center sm:block">
              <div className="mt-6 sm:mt-12 gap-6 justify-between items-center flex-row  w-3/4 md:w-5/6 lg:w-3/4 block lg:flex">
                <button className="pt-3 pb-3 social-icon w-full focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border">
                  <div className="flex justify-center items-center mr-3">
                    <Image
                      src={googleIcon}
                      alt="back"
                      width={20}
                      height={20}
                      layout="fixed"
                    />
                  </div>
                  <span className="text-black">Login with Google</span>
                </button>

                <button className="pt-3 pb-3  social-icon w-full focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border mt-4 lg:mt-0">
                  <div className="flex justify-center items-center mr-3">
                    <Image
                      src={fbIcon}
                      alt="back"
                      width={20}
                      height={20}
                      layout="fixed"
                    />
                  </div>
                  <span className="text-black">Login with Facebook</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center sm:justify-between items-center mb-6 w-full md:w-5/6 lg:w-3/4 mt-6 sm:mt-8 whitespace-nowrap">
              <div className="ml-0 sm:ml-auto">
                <span className="text-black">Don't have an account ?</span>
                <Link href="/auth/signup">
                  <span className="cursor-pointer text-[#0364FF] ml-1 font-bold">
                    Sign up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
