import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CoverImage from "../../../assets/login-cover.png";
import googleIcon from "../../../assets/googleIcon.svg";
import fbIcon from "../../../assets/fbIcon.svg";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { CustomTextField } from "../../core/CustomMUIComponents";
import { useForm } from "react-hook-form";
import { signUp } from "../../../services/auth";
import Router from "next/router";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

export default function SignUp({ signUpType, onBoardingType, handleClose }) {

  const [showPassword, setShowPassword] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
    getValues,
  } = useForm();
  const onSubmit = (data) => {

    signUp({
      email: data.email,
      password: data.password,
    }).then((res) => {

      console.log("resss", res);
        localStorage.setItem("email", data.email);
        onBoardingType()
    }, (error) => {
      console.log("error....", error);
      setInvalid(true);

      setErrorMsg(error.response.data.detail)


    });
  }
  const onError = (errors) => console.log("Errors Occurred !! :", errors);

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-full"
      >
        <div
          className="p-4 cover-image hidden sm:block animate__animated animate__zoomIn h-full"
        >
          <Image src={CoverImage} alt="CoverImage" />
        </div>
        <div className="p-4 ml-0 sm:ml-4 md:ml-4 lg:ml-12 animate__animated animate__zoomIn">
          <div onClick={handleClose} className="flex">
            <CloseIcon className="text-black ml-auto cursor-pointer" />
          </div>
          <h3 className="pb-2 mt-8 sm:mt-32 font-semibold text-xl sm:text-2xl text-[#03014C] flex justify-center sm:block">
            Sign up to Compoisite
          </h3>
          <div className="mt-4 sm:mt-8">
            <form onSubmit={handleSubmit(onSubmit, onError)} onReset={reset}>
              <div className="flex flex-col">
                <div className="flex sm:block justify-center">
                  <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
                    {invalid && (<Alert severity="error" className="mb-4 -mt-4">{errorMsg}</Alert>)}
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <EmailIcon
                        sx={{ mr: 2, my: 0.5 }}
                        className="text-black"
                      />
                      <CustomTextField
                        id="input-with-sx"
                        label="Email Address"
                        variant="standard"
                        className="w-full"
                        {...register("email", {
                          required: "Email is required",
                          onChange: (e) => {
                            setInvalid(false);
                          },
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
                    </Box>
                    <div className="mt-2 ml-9">
                      {errors.email && (
                        <span style={{ color: "red" }} className="-mb-6">
                          {errors.email?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex sm:block justify-center">
                  <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <LockIcon
                        sx={{ mr: 2, my: 0.5 }}
                        className="text-black"
                      />
                      <CustomTextField
                        type={showPassword ? "text" : "password"}
                        id="input-with-sx"
                        label="Password"
                        variant="standard"
                        className="w-full"
                        {...register("password", {
                          required: "Password is required",
                          onChange: (e) => {
                            setInvalid(false);
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              className="cursor-pointer"
                              onClick={() => setShowPassword((show) => !show)}
                            >
                              {!showPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <RemoveRedEyeIcon />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <div className="mt-2 ml-9">
                      {errors.password && (
                        <span style={{ color: "red" }} className="-mb-6">
                          {errors.password?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center sm:block">
                  <button
                    type="submit"
                    className="bg-[#0364FF] hover:bg-[#0364FF] text-gray-100 p-4 w-3/4 md:w-5/6 lg:w-3/4 rounded-xl tracking-wide
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
                <button className="pt-3 pb-3 w-full focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border">
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

                <button className="pt-3 pb-3 w-full focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border mt-4 lg:mt-0">
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
            <div className="flex justify-center sm:justify-between items-center mb-6  w-full md:w-5/6 lg:w-3/4 mt-6 sm:mt-8 whitespace-nowrap">
              <div className="ml-0 sm:ml-auto">
                <span className="text-black">Already have an account?</span>
                <span className="cursor-pointer text-[#0364FF] ml-1 font-bold" onClick={signUpType}>
                  Login
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
