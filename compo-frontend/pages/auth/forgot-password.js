import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import emailIcon from "../../assets/dashicons_email.svg";
import backIcon from "../../assets/backIcon.svg";

export default function ForgotPassword() {
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
            <Image src={Logo} alt="LoginImage" />
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-gray-900 text-xl font-bold mb-2">
            Forgot Password
          </h1>
          <p className="text-gray-700 text-base mb-4">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
          <p className="text-gray-700 text-base mb-4">
            For security reasons, we do NOT store your password. So rest assured
            that we will never send your password via email.
          </p>
          <div className="form-floating mb-8 flex justify-start items-center border-b border-solid border-gray-300 w-full">
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
            <label htmlFor="floatingInput" className="text-gray-700 ml-8">
              Email address
            </label>
          </div>
          <div className="mt-8">
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
