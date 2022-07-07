import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import backIcon from "../../assets/backIcon.svg";
import Box from '@mui/material/Box';

import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { CustomTextField } from "../../components/core/CustomForms";

export default function UpdatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="grid grid-cols-12 justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>

      <div className="block p-4 rounded-lg shadow-lg bg-white text-center col-span-10 sm:col-span-8 md:col-span-8 lg:col-span-6 xl:col-span-4">
        <div className="grid grid-cols-3">
          <div className="text-start">
            <Link href="/auth/signin">
              <button className="text-white  focus:ring-0 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center border">
                <Image src={backIcon} alt="back" />
              </button>
            </Link>
          </div>
          <div className="col-span-2.5 flex items-center justify-center">
            <Image src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-gray-900 text-xl font-bold mb-2">
            Update Password
          </h1>
          <p className="text-gray-700 text-sm mb-12">
            update your new password
          </p>

           <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-6">
        <LockIcon sx={{  mr: 2, my: 0.5 }} className="text-black" />
        <CustomTextField  type={showPassword ? "text" : "password"} id="input-with-sx" label="Password" variant="standard" className="w-full" InputProps={{
          endAdornment: (
            <InputAdornment position="start" className="cursor-pointer" onClick={() => setShowPassword((show) => !show)}>
           {!showPassword?    <VisibilityOffIcon /> :<RemoveRedEyeIcon/>}
            </InputAdornment>
          ),
        }} />
      </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-6">
        <LockIcon sx={{  mr: 2, my: 0.5 }} className="text-black" />
        <CustomTextField  type={showConfirmPassword ? "text" : "password"} id="input-with-sx" label="Confirm Password" variant="standard" className="w-full" InputProps={{
          endAdornment: (
            <InputAdornment position="start" className="cursor-pointer" onClick={() => setShowConfirmPassword((show) => !show)}>
           {!showConfirmPassword?    <VisibilityOffIcon /> :<RemoveRedEyeIcon/>}
            </InputAdornment>
          ),
        }} />
      </Box>
          <div className="mt-8">
          
                         <Button variant="contained" className="bg-[#0364FF] hover:bg-[#0364FF] text-gray-100 p-3 w-full rounded-xl
                  font-semibold focus:outline-none focus:shadow-outline
                  shadow-lg capitalize text-lg">  
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
