import NextLink from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import emailIcon from "../assets/dashicons_email.svg";

export default function ForgotPassword() {
  return (
    <div class="flex justify-center items-center" style={{ height: "100vh" }}>
      <div class="block rounded-lg shadow-lg bg-white max-w-lg text-center">
        <div class="grid grid-cols-3">
          <div class="text-start">
            <NextLink href="/signin">
              <button
                type="button"
                class="inline-block px-3 py-2 border-2 border-gray-200 text-balck-100 font-medium text-xs leading-tight rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="angle-left"
                  class="w-3 h-4"
                  role="img"
                >
                  <path
                    fill="currentColor"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  ></path>
                </svg>
              </button>
            </NextLink>
          </div>
          <div class="col-span-2.5 flex items-center">
            <Image src={Logo} alt="LoginImage" />
          </div>
        </div>

        <div class="p-6">
          <h1 class="text-gray-900 text-xl font-bold mb-2">Forgot Password</h1>
          <p class="text-gray-700 text-base mb-4">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
          <p class="text-gray-700 text-base mb-4">
            For security reasons, we do NOT store your password. So rest assured
            that we will never send your password via email.
          </p>
          <div className="mt-12 border-b border-gray-300 flex">
            <div className="px-3 py-2 flex items-center">
              <Image src={emailIcon} alt="LoginImage" />
            </div>
            <div class="flex-col flex w-full ml-4">
              <div className="text-sm text-gray-400 tracking-wide text-start">
                Email Address
              </div>
              <input
                className="text-lg text-gray-700 py-2 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="youraddress@gmail.com"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              className="bg-blue-600 text-gray-100 p-3 w-full rounded-xl tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-700
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
