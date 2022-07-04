import Image from "next/image";
import CoverImage from "../assets/login.png";
import emailIcon from "../assets/dashicons_email.svg";
import passwordIcon from "../assets/dashicons_password.svg";

export default function SignIn() {
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        style={{ height: "100vh" }}
      >
        <div
          className="p-4 cover-image hidden sm:block"
          style={{ height: "calc(100vh - 30px)" }}
        >
          <Image src={CoverImage} alt="CoverImage" />
        </div>
        <div className="p-4 ml-12">
          <h3 className="text-2xl font-bold mb-6 pb-2 mt-32">
            Login to your Account
          </h3>
          <div className="mt-12">
            <form>
              <div className="mt-8 border-b border-gray-300 flex w-3/4">
                <div className="px-3 py-2 flex items-center">
                  <Image src={emailIcon} alt="emailIcon" />
                </div>
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
              </div>
              <div className="mt-12 border-b border-gray-300 flex w-3/4">
                <div className="px-3 py-2 flex items-center">
                  <Image src={passwordIcon} alt="passwordIcon" />
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
              </div>

              <div className="mb-6 w-3/4 mt-8 flex">
                <a
                  href="/forgotPassword"
                  className="text-gray-400 hover:text-gray-700 focus:text-gray-700 transition duration-200 ease-in-out ml-auto"
                >
                  Forgot password?
                </a>
              </div>
              <div className="mt-8">
                <button
                  className="bg-blue-500 text-gray-100 p-4 w-3/4 rounded-xl tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                  shadow-lg"
                >
                  Login to continue
                </button>
              </div>
            </form>
            <div className="mt-8 justify-between items-center flex-row  sm:w-3/4 w-full block lg:flex gap-12">
              <div>
                <button className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 sm:mb-2 mb-4 sm:w-full w-3/4">
                  <svg
                    className="w-4 h-4 mr-2 ml-1"
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
                  Sign in with Google
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 sm:w-full w-3/4"
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
                  Sign in with Facebook
                </button>
              </div>
            </div>

            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center w-3/4">
              Don't have an account ?
              <a
                className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-1"
                href="/signup"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <section class="text-gray-800 text-center md:text-left">
          <div class="block rounded-lg shadow-lg bg-white">
            <div
              class="flex flex-wrap items-center"
              style={{ height: "100vh" }}
            >
              <div
                class="p-4 grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12"
                style={{ height: "100vh" }}
              >
                <Image src={CoverImage} alt="CoverImage" />
              </div>
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div class="px-6 py-12 md:px-12">
                  <h2 class="text-3xl font-bold mb-6 pb-2">
                    Login to your Account
                  </h2>

                  <div class="flex flex-wrap mb-6">
                    <div class="w-full lg:w-w-3/4 xl:w-w-3/4 mb-4">
                      <div className="text-sm text-gray-400 tracking-wide">
                        Email Address
                      </div>
                      <input
                        className="w-3/4 text-lg text-gray-700 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        type=""
                        placeholder="mike@gmail.com"
                      />
                    </div>
                    <div class="w-full lg:w-w-3/4 xl:w-w-3/4 mb-4">
                      <div>
                        <div className="text-sm text-gray-400 tracking-wide">
                          Password
                        </div>
                      </div>
                      <input
                        className="w-3/4 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        type=""
                        placeholder="Enter your password"
                      />
                    </div>
                    <div class="w-full lg:w-w-3/4 xl:w-w-3/4 md:w-w-3/4 mb-4 flex">
                      <div className="w-3/4 ml-auto">
                        <a
                          href="#!"
                          className="text-gray-400 hover:text-gray-700 focus:text-gray-700 transition duration-200 ease-in-out"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div class="w-full lg:w-w-3/4 xl:w-w-3/4 mb-4">
                      <button
                        className="bg-blue-500 text-gray-100 p-4 w-3/4 rounded-xl tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                                shadow-lg"
                      >
                        Login to continue
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-start items-center flex-row mt-8 w-3/4">
                    <div>
                      <button
                        type="button"
                        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
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
                        Sign in with Google
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
                        Sign in with Facebook
                      </button>
                    </div>
                  </div>
                  <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center w-3/4">
                    Don't have an account ?
                    <a
                      className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-1"
                      href="/signup"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
}
