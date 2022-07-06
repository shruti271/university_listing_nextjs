import Image from "next/image";
import CoverImage from "../../assets/steps-cover-1.png";
import eduIcon from "../../assets/edu-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import dobIcon from "../../assets/dob-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import professionIcon from "../../assets/profession.svg";
import majorIcon from "../../assets/major.svg";

export default function RegistrationSteps() {
  return (
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
        <ul className="stepper mt-8" data-mdb-stepper="stepper">
          <li className="stepper-step stepper-active">
            <div className="stepper-head">
              <span className="stepper-head-icon">1</span>
            </div>
            <div className="stepper-content">
              <h3 className="pb-2 font-semibold text-2xl text-[#03014C] flex justify-center sm:block">
                Tell us about yourself
              </h3>
              <p className="text-gray-700 text-base mb-4 flex justify-center sm:block">
                No data will be shared to any third party
              </p>
              <form>
                <div className="flex flex-col mt-8">
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={userIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Firstname
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={userIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Lastname
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center sm:block">
                    <div
                      className="datepicker relative form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4"
                      data-mdb-toggle-button="false"
                    >
                      <Image src={dobIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                        placeholder="Select a date"
                      />
                      <button
                        className="inline-block  text-balck-100 font-medium text-xs leading-tight rounded-xl focus:outline-none focus:ring-0 transition duration-150 ease-in-out datepicker-toggle-button"
                        data-mdb-toggle="datepicker"
                      >
                        <Image
                          src={dobIcon}
                          alt="emailIcon"
                          className="datepicker-toggle-icon"
                        />
                      </button>
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Date of birth
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={locationIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Current Location
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:block">
                  <div className="mt-4 gap-6 justify-between items-center flex-row  w-3/4 md:w-5/6 lg:w-3/4 flex">
                    <button className="p-3 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border">
                      Back
                    </button>
                    <button className="px-8 py-3 bg-[#0364FF] focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center text-white inline-flex items-center justify-center border">
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className="stepper-step">
            <div className="stepper-head">
              <span className="stepper-head-icon"> 2 </span>
            </div>
            <div className="stepper-content">
              <h3 className="pb-2 font-semibold text-2xl text-[#03014C] flex justify-center sm:block">
                Insights of your education
              </h3>
              <p className="text-gray-700 text-base mb-4 flex justify-center sm:block">
                For us to filter the best results for you
              </p>
              <form>
                <div className="flex flex-col mt-8">
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={eduIcon} alt="eduIcon" />
                      <select
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
                        aria-label="Choose"
                      >
                        <option>Choose</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Education Level
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={eduIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Institute Name
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={locationIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Institure Location
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-center sm:block">
                    <div className="mb-8 flex justify-between items-center w-3/4 md:w-5/6 lg:w-3/4">
                      <div>
                        <p className="pb-2 mt-1.5 font-semibold text-md text-[#11142D] flex justify-center sm:block">
                          Are you graduated?
                        </p>
                      </div>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="yes"
                          />
                          <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor="inlineCheckbox1"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="no"
                          />
                          <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor="inlineCheckbox2"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center sm:block">
                    <div
                      className="datepicker relative form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4"
                      data-mdb-toggle-button="false"
                    >
                      <Image src={dobIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                        placeholder="Select a date"
                      />
                      <button
                        className="inline-block  text-balck-100 font-medium text-xs leading-tight rounded-xl focus:outline-none focus:ring-0 transition duration-150 ease-in-out datepicker-toggle-button"
                        data-mdb-toggle="datepicker"
                      >
                        <Image
                          src={dobIcon}
                          alt="emailIcon"
                          className="datepicker-toggle-icon"
                        />
                      </button>
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Projected Graduation Date
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:block">
                  <div className="mt-4 gap-6 justify-between items-center flex-row  w-3/4 md:w-5/6 lg:w-3/4 flex">
                    <button className="p-3 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border">
                      Back
                    </button>
                    <button className="px-8 py-3 bg-[#0364FF] focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center text-white inline-flex items-center justify-center border">
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className="stepper-step">
            <div className="stepper-head">
              <span className="stepper-head-icon"> 3 </span>
            </div>
            <div className="stepper-content">
              <h3 className="pb-2 font-semibold text-2xl text-[#03014C] flex justify-center sm:block">
                Your future plans
              </h3>
              <p className="text-gray-700 text-base mb-4 flex justify-center sm:block">
                To serve the best possible way
              </p>
              <form>
                <div className="flex flex-col mt-8">
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={professionIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                        placeholder="Desired profession"
                      />
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Desired profession
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center sm:block">
                    <div className="form-floating mb-8 flex  justify-start  items-center border-b border-solid border-gray-300 w-3/4 md:w-5/6 lg:w-3/4">
                      <Image src={majorIcon} alt="emailIcon" />
                      <input
                        type="text"
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
                        placeholder="Desired major"
                      />
                      <label
                        htmlFor="floatingInput"
                        className="text-gray-700 ml-8"
                      >
                        Desired major
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:block">
                  <div className="mt-4 gap-6 justify-between items-center flex-row  w-3/4 md:w-5/6 lg:w-3/4 flex">
                    <button className="p-3 focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border">
                      Back
                    </button>
                    <button className="px-8 py-3 bg-[#0364FF] focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center text-white inline-flex items-center justify-center border">
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
