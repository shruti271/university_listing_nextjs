import Image from "next/image";
import Logo from "../assets/logo.svg";
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/router";
import { Activation } from "../services/auth";
import { useEffect, useState } from "react";
import AuthModal from "../components/core/AuthModal";

import { AuthType } from "../components/core/Enum";


export default function Activate() {
    const [email, setEmail] = useState();
    const [verified, setVerified] = useState(false);
    const router = useRouter();
    const { token } = router.query
    console.log("::::::", token);
    const [authType, setAuthType] = useState();

    const [open, setOpen] = useState(false);

    const handleClose = () => { setOpen(false), setAuthType() }


    const activateEmail = () => {
        Activation({
            email: email,
            token: token
        }).then((res) => {
            console.log("ress", res);
            setVerified(true);
        }, (error) => {
            console.log("error", error)
        })
    }
    useEffect(() => {
        const getEmail = window.localStorage.getItem("email");
        setEmail(getEmail);
        console.log("email", email)
        console.log("token", token)
        activateEmail()

    }, [token])
    return (
        <div
            className="grid grid-cols-12 justify-center items-center"
            style={{ height: "100vh" }}
        >
            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>

            <div className="block p-4 rounded-lg shadow-lg bg-white text-center col-span-10 sm:col-span-8 md:col-span-8 lg:col-span-6 xl:col-span-4">

                <div className="flex items-center justify-center">
                    <Image src={Logo} alt="LoginImage" />
                </div>


                <div className="p-6">
                    <h1 className="text-gray-900 text-xl sm:text-2xl font-bold mb-2">
                        <b className="text-green-600">I</b> ACTIVATING ACCOUNT
                    </h1>
                    {!verified ?
                        <>
                            <p className="text-gray-700 text-base mb-8">
                                Please wait while we activate your account....
                            </p>

                            <CircularProgress color="success" />
                        </>
                        :
                        <>
                            <p className="text-gray-700 text-base mb-8">
                                Your account has been activated. Please Login.....
                            </p>

                            <button
                                className="bg-colorPrimary text-colorPale hover:bg-[#0257e2] rounded-2xl py-4 px-8 font-semibold hover:scale-95 transition-all duration-300 text-sm md:text-base "
                                onClick={() => {
                                    setOpen(true),
                                        setAuthType(AuthType[0])
                                }}
                            >
                                Log In
                            </button>

                            <AuthModal
                                open={open}
                                handleClose={handleClose}
                                authType={authType}
                            />
                        </>
                    }

                </div>
            </div>
        </div>
    )
}