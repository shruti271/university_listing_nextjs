import Image from "next/image";
import LoginImage from "../assets/login.svg";
import Link from "next/link";
import "tw-elements";

export default function SignIn() {
  return (
    <>
      <div className="container-fluid">
        <div className="grid grid-cols-2 h-screen p-6">
          <div className="relative">
            <Image
              src={LoginImage}
              layout="fill"
              objectFit="cover"
              alt="LoginImage"
            />
          </div>
          <div className="pl-24">
            <div className="mt-16 mb-16">
              <span className="font-medium leading-tight text-3xl">
                Login to your Account
              </span>
            </div>
            <form>
              {/* <div>
                <div className="text-sm text-gray-400 tracking-wide">
                  Email Address
                </div>
                <input
                  className="w-3/4 text-lg text-gray-700 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="mike@gmail.com"
                />
              </div> */}
              <div className="flex flex-col">
                <div className="form-floating mb-8">
                  <input
                    type="email"
                    className="form-control
                              block
                              w-3/4
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="Email"
                  />
                  <label htmlFor="floatingInput" className="text-gray-700">
                    Email address
                  </label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control
                              block
                              w-3/4
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="floatingInput"
                    placeholder="password"
                  />
                  <label htmlFor="floatingInput" className="text-gray-700">
                    Password
                  </label>
                </div>
                <div className="flex justify-end mb-11 w-3/4">
                  <Link
                    href="/signin"
                    className="text-gray-400 hover:text-gray-700 focus:text-gray-700 transition duration-200 ease-in-out ml-auto"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="">
                  <button
                    className="bg-blue-500 text-gray-100 p-4 w-3/4 rounded-xl tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                  shadow-lg"
                  >
                    Login to continue
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-between items-center flex-row mt-8 w-3/4">
              <div>
                <button
                  type="button"
                  className="font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Login with Google
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    ></path>
                  </svg>
                  Login with Facebook
                </button>
              </div>
            </div>

            <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center w-3/4">
              <span>Don't have an account ?</span>
              <Link
                className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-1"
                href="/signup"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
