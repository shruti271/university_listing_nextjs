import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import backIcon from "../assets/backIcon.svg";

export default function VerifyAccount() {
  return (
    <div
      className="grid grid-cols-12 justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>

      <div className="block p-4 rounded-lg shadow-lg bg-white text-center col-span-10 sm:col-span-8 md:col-span-8 lg:col-span-6 xl:col-span-4">
        <div className="grid grid-cols-3">
          <div className="text-start">
            <Link href="/signin">
              <button className="text-white  focus:ring-0 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center border">
                <Image src={backIcon} alt="back" />
              </button>
            </Link>
          </div>
          <div className="col-span-2.5 flex items-center justify-center">
            <Image src={Logo} alt="LoginImage" />
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-gray-900 text-xl font-bold mb-2">
            Verify Account
          </h1>
          <p className="text-gray-700 text-base mb-4">
            Please enter the verification received on your registered email.
          </p>

          <div className="flex justify-between">
            <input
              type="tel"
              maxLength="1"
              className="border-b border-gray-500 w-10 h-10 text-center"
            />
            <input
              type="tel"
              maxLength="1"
              className="border-b border-gray-500 w-10 h-10 text-center"
            />
            <input
              type="tel"
              maxLength="1"
              className="border-b border-gray-500 w-10 h-10 text-center"
            />
            <input
              type="tel"
              maxLength="1"
              className="border-b border-gray-500 w-10 h-10 text-center"
            />
            <input
              type="tel"
              maxLength="1"
              className="border-b border-gray-500 w-10 h-10 text-center"
            />
            <input
              type="tel"
              maxLength="1"
              className="border-b border-gray-500 w-10 h-10 text-center"
            />
          </div>
          <div className="flex items-center mt-8">
            <div className="ml-auto">
              didn't get the code ?
              <a
                // href="/signin"
                className="cursor-pointer text-[#0364FF] ml-1"
              >
                Resend
              </a>
            </div>
          </div>
          <div className="mt-48">
            <button
              className="bg-[#0364FF] text-gray-100 p-3 w-full rounded-xl tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline 
                  shadow-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
