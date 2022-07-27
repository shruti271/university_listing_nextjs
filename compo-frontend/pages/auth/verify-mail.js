

import Image from "next/image";
import Logo from "../../assets/logo.svg";

import { useEffect, useState } from "react";
import { ResendActivation } from "../../services/auth";
import { Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Router from "next/router";
import { AuthTypeModal } from "../../components/core/Enum";
import withAuth from './../../components/core/PrivateRoute';


const VerifyMail=()=> {
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [success, setSuccess] = useState(false);
    const [alertMsg, setAlertMsg] = useState(false);
    const [email, setEmail] = useState();
    useEffect(() => {
        const getEmail = window.localStorage.getItem("email")
        setEmail(getEmail)
    }, [])

    const ResendActivationLink = () => {
        setLoading(true);
        setInvalid(false);
        ResendActivation({
            email: email
        }).then(
            (res) => {
                console.log("response", res);
                setLoading(false);
                setSuccess(true);
                setAlertMsg(res.data.detail);
            },
            (error) => {
                console.log("error", error);
                setInvalid(true);
                setLoading(false);
                setAlertMsg(error.response.data.detail);
            }
        );
    }
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

                    <h1 className="text-gray-900 text-xl font-bold mb-8">
                        <b className="text-green-600">I</b> Verify Your Email
                    </h1>
                    {(invalid || success) && (
                        <Alert
                            severity={success ? "success" : "error"}
                            className="mb-4 -mt-4"
                        >
                            {alertMsg}
                            {invalid && <span className="cursor-pointer text-[rgb(95, 33, 32)] ml-1 font-bold underline" onClick={() => {
                                window.history.pushState(AuthTypeModal.Signin, "", "/"),
                                    Router.push("/")
                            }}>
                                Login
                            </span>}

                        </Alert>
                    )}
                    <p className="text-gray-700 text-base mb-4">
                        To use Composite, click the verification link in the email we sent to <b> {email}</b>. This helps keep your account secure.
                    </p>


                    <p className="text-gray-700 text-base mb-4">
                        No email in your inbox or span folder? <a className="cursor-pointer text-[#0364FF] ml-1 font-bold" onClick={ResendActivationLink}>
                            {loading && (
                                <CircularProgress
                                    size={10}
                                    color="primary"
                                    thickness={8}
                                    sx={{ color: "#0364FF", mr: 1 }}
                                />
                            )}
                            Let's resend it</a>
                    </p>


                    <p className="text-gray-700 text-base mb-4">
                        Wrong address?
                        <a className="cursor-pointer text-[#0364FF] ml-1 font-bold" onClick={() => {
                            localStorage.clear(),
                                window.history.pushState(AuthTypeModal.Signin, "", "/"),
                                Router.push("/")
                        }}> Log Out  </a>
                        to sign in with a different email. if you mistyped your email when signing up.create a new account.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default withAuth(VerifyMail);
