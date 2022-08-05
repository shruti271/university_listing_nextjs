import Image from "next/image";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import * as React from "react";
import StepLabel from "@mui/material/StepLabel";

import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CustomTextField,
  QontoConnector,
  QontoStepIcon,
} from "../../core/CustomMUIComponents";

import { useForm, Controller } from "react-hook-form";
import Router from "next/router";
import { onBoarding } from "../../../services/auth";
import CoverImage1 from "../../../assets/reg-step-1.png";
import CoverImage2 from "../../../assets/reg-step-2.png";
import CoverImage3 from "../../../assets/reg-step-3.png";
import CloseIcon from "@mui/icons-material/Close";
import LoginLogo from "../../../assets/LoginLogo.svg";
import CircularProgress from "@mui/material/CircularProgress";

import countries from "countries-list";

const countryCodes = Object.keys(countries.countries);
const countryNames = countryCodes.map((code) => countries.countries[code].name);
countryNames.sort();

const theme = createTheme({
  palette: {
    primary: {
      main: "#0364ff",
    },
  },
});

const steps = ["About", "Education", "Profession"];

export default function RegistrationSteps({ handleClose }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState([]);
  const [email, setEmail] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
    getValues,
    setError,
    control,
  } = useForm();

  React.useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, []);

  const formatDate = (date) => {
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const year = date.toLocaleString("default", { year: "numeric" });
    return year + "-" + month + "-" + day;
  };

  const onSubmit = (data) => {
    if (activeStep !== 2) {
      handleNext();
    } else {
      setLoading(true);
      console.log("Data To be Submitted !!", data);
      console.log("email !!", email);

      onBoarding({
        email: email,
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: formatDate(data.date_of_birth),
        current_location: data.current_location,
        educational_level: data.educational_level,
        institute_location: data.institute_location,
        graduated: data.graduated,
        graduated_date: formatDate(data.graduated_date),
        desired_profession: data.desired_profession,
        desired_major: data.desired_major,
      }).then(
        (res) => {
          setLoading(false);
          Router.push("/auth/verify-mail");
        },
        (error) => {
          setLoading(false);
          console.log("Error while onboarding", error);
        }
      );
    }
  };

  const onError = (errors) => console.log("Errors Occurred !! :", errors);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // React.useEffect(() => {
  //   setError("date_of_birth", {
  //     types: {
  //       required: "Date of birth is required",
  //     }
  //   });
  // }, [setError])

  React.useEffect(() => {
    console.log("errors :", errors);
  }, [errors]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
      <div className="p-4 hidden sm:block h-full">
        {activeStep === 0 && (
          <div className="bg-cover-auth w-full h-full animate__animated animate__zoomIn onboarding1-cover text-center">
            <Image src={LoginLogo} alt="CoverImage" />
          </div>
        )}
        {activeStep === 1 && (
          <div className="bg-cover-auth onbording-cover2 w-full h-full animate__animated animate__zoomIn onboarding2-cover text-center">
            <Image src={LoginLogo} alt="CoverImage" />
          </div>
        )}
        {activeStep === 2 && (
          <div className="bg-cover-auth w-full h-full animate__animated animate__zoomIn onboarding3-cover text-center">
            <Image src={LoginLogo} alt="CoverImage" />
          </div>
        )}
      </div>
      <div className="p-4 ml-0 sm:ml-4 md:ml-4 lg:ml-12">
        <div className="flex">
          <CloseIcon
            className="text-black ml-auto cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <Box
          className={`mt-3 sm:mt-24 ${activeStep === 1 && "sm:!mt-8"} ${
            activeStep === 2 && "!mt-20 sm:!mt-24"
          }`}
        >
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
            className={
              (activeStep === 0 &&
                "mt-2 sm:mt-8 w-full sm:w-72 ml-0 sm:-ml-9") ||
              (activeStep === 1 &&
                "mt-2 sm:mt-8 w-full sm:w-72 ml-0 sm:-ml-9") ||
              (activeStep === 2 && "mt-2 sm:mt-8 w-full sm:w-72 ml-0 sm:-ml-9")
            }
          >
            {steps.map((index, label) => (
              <Step key={index}>
                <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === 0 && (
              <div>
                <h3 className="pb-2 mt-8 font-semibold text-[21px] sm:text-2xl text-[#03014C] flex justify-center sm:block text-center sm:text-start ">
                  Tell us about yourself
                </h3>
                <span className="text-[#92929D] text-base mb-4 flex justify-center sm:block text-center sm:text-start">
                  No data will be shared to any third party
                </span>
                <form>
                  <div className="flex flex-col mt-8">
                    <div className="flex justify-center sm:block">
                      <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <PersonIcon
                            sx={{ mr: 2, my: 0.5 }}
                            className="text-black"
                          />
                          <CustomTextField
                            id="input-with-sx"
                            label="Firstname"
                            variant="standard"
                            className="w-full"
                            {...register("first_name", {
                              required: "Firstname is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2 ml-9">
                          {errors.first_name && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.first_name?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:block justify-center">
                      <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <PersonIcon
                            sx={{ mr: 2, my: 0.5 }}
                            className="text-black"
                          />
                          <CustomTextField
                            id="input-with-sx"
                            label="Lastname"
                            variant="standard"
                            className="w-full"
                            {...register("last_name", {
                              required: "Lastname is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2 ml-9">
                          {errors.last_name && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.last_name?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:block justify-center">
                      <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <DateRangeIcon
                            sx={{ mr: 2, my: 0.5 }}
                            className="text-black"
                          />
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Controller
                              control={control}
                              name="date_of_birth"
                              defaultValue={null}
                              render={({ field: { ref, ...fieldProps } }) => (
                                <DesktopDatePicker
                                  {...fieldProps}
                                  label="Date of Birth"
                                  value={fieldProps.value}
                                  onChange={(e) => fieldProps.onChange(e)}
                                  renderInput={(params) => (
                                    <CustomTextField
                                      {...params}
                                      className="w-full"
                                      variant="standard"
                                    />
                                  )}
                                />
                              )}
                              rules={{ required: true }}
                            />
                          </LocalizationProvider>
                        </Box>
                        <div className="mt-2 ml-9">
                          {errors.date_of_birth?.type &&
                            errors.date_of_birth?.type === "required" && (
                              <span style={{ color: "red" }} className="-mb-6">
                                Date of birth is required
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                    {/* <span style={{ color: "red" }}>{errors.dob?.message}</span> */}

                    <div className="flex sm:block justify-center">
                      <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <LocationOnIcon
                            sx={{ mr: 2, my: 0.5 }}
                            className="text-black"
                          />
                          <CustomTextField
                            label="Current Location"
                            variant="standard"
                            select
                            fullWidth
                            {...register("current_location", {
                              required: "Current Location is required",
                            })}
                          >
                            {countryNames.map((country) => (
                              <MenuItem value={country}>{country}</MenuItem>
                            ))}
                          </CustomTextField>
                        </Box>
                        <div className="mt-2 ml-9">
                          {errors.current_location && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.current_location?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <h3 className="pb-2 mt-8 font-semibold text-2xl text-[#03014C] flex justify-center sm:block text-[21px] sm:text-2xl text-center sm:text-start">
                  Insights of your education
                </h3>
                <p className=" text-[#92929D] text-base mb-4 flex justify-center sm:block text-center sm:text-start">
                  For us to filter the best results for you
                </p>

                <div className="flex flex-col mt-8 max-h-[345px] sm:max-h-full overflow-y-scroll">
                  <div className="flex justify-center sm:block">
                    <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <SchoolIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          select
                          fullWidth
                          label="Educational Level"
                          variant="standard"
                          inputProps={register("educational_level", {
                            required: "Education Level is required",
                          })}
                        >
                          <MenuItem value={1}>Non Graduate</MenuItem>
                          <MenuItem value={2}>Graduate</MenuItem>
                          <MenuItem value={3}>Post Graduate</MenuItem>
                        </CustomTextField>
                      </Box>
                      <div className="mt-2 ml-9">
                        {errors.educational_level && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.educational_level?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:block justify-center">
                    <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <SchoolIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          label="Institute Name"
                          variant="standard"
                          className="w-full"
                          {...register("institute_name", {
                            required: "Institute Name is required",
                          })}
                        />
                      </Box>
                      <div className="mt-2 ml-9">
                        {errors.institute_name && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.institute_name?.message}
                          </span>
                        )}{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:block justify-center">
                    <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <LocationOnIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          label="Institute Location"
                          variant="standard"
                          select
                          fullWidth
                          {...register("institute_location", {
                            required: "Institute Location is required",
                          })}
                        >
                          {countryNames.map((country) => (
                            <MenuItem value={country}>{country}</MenuItem>
                          ))}
                        </CustomTextField>
                      </Box>
                      <div className="mt-2 ml-9">
                        {errors.institute_location && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.institute_location?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:justify-center sm:block">
                    <div className="mb-4 mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center w-[90%] md:w-5/6 lg:w-3/4">
                      <span className="pb-2 mt-2.5 font-semibold text-md text-[#11142D] ml-12 sm:ml-9">
                        Are you graduated?
                      </span>
                      <ThemeProvider theme={theme}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-form-control-label-placement"
                          name="position"
                          className="ml-12 sm:ml-0"
                        >
                          <FormControlLabel
                            value="True"
                            control={<Radio {...register("graduated")} />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="False"
                            control={<Radio {...register("graduated")} />}
                            label="No"
                          />
                        </RadioGroup>
                      </ThemeProvider>
                    </div>
                  </div>
                  <div className="flex sm:block justify-center">
                    <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <DateRangeIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Controller
                            name="graduated_date"
                            control={control}
                            defaultValue={null}
                            render={({
                              field: { ref, ...rest },
                              formState: { error },
                            }) => (
                              <DesktopDatePicker
                                label="Projected Graduation Date"
                                error={!!error}
                                helperText={error ? error.message : null}
                                renderInput={(params) => (
                                  <CustomTextField
                                    {...params}
                                    className="w-full"
                                    variant="standard"
                                  />
                                )}
                                {...rest}
                              />
                            )}
                            rules={{ required: true }}
                          />
                        </LocalizationProvider>
                      </Box>
                      <div className="mt-2 ml-9">
                        {errors.graduated_date?.type &&
                          errors.graduated_date?.type === "required" && (
                            <span style={{ color: "red" }} className="-mb-6">
                              Graduation Date is required
                            </span>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <h3 className="pb-2 mt-8 font-semibold text-2xl text-[#03014C] flex justify-center sm:block text-[21px] sm:text-2xl text-center sm:text-start">
                  Your future plans
                </h3>
                <span className=" text-[#92929D] text-base mb-4 flex justify-center sm:block text-center sm:text-start">
                  To serve the best possible way
                </span>
                <div className="flex flex-col mt-8">
                  <div className="flex justify-center sm:block">
                    <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <WorkIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Desired profession"
                          variant="standard"
                          className="w-full"
                          {...register("desired_profession", {
                            required: "Desired profession is required",
                          })}
                        />
                      </Box>
                      <div className="mt-2 ml-9">
                        {errors.desired_profession && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.desired_profession?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:block justify-center">
                    <div className="flex  sm:block flex-col mb-6 w-[90%] md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <LocalLibraryIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Desired major"
                          variant="standard"
                          className="w-full"
                          {...register("desired_major", {
                            required: "Desired major is required",
                          })}
                        />
                      </Box>
                      <div className="mt-2 ml-9">
                        {errors.desired_major && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.desired_major?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              className={`flex justify-center sm:block ${
                activeStep === 2 && "pb-28 sm:pb-36"
              } `}
            >
              <Box className="flex pt-2 mt-4 w-[90%] sm:w-3/4 md:w-5/6 lg:w-3/4 justify-between">
                <button
                  type="submit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="text-[#544E5D] font-semibold mr-1 bg-[#F9F9FA] hover:bg-[#F9F9FA] px-9 py-3 rounded-xl focus:outline-none focus:shadow-outline"
                >
                  Back
                </button>

                <button
                  type="submit"
                  onClick={handleSubmit(onSubmit, onError)}
                  className="bg-[#0364FF] hover:bg-[#0364FF] mr-1 text-white px-9 py-3 rounded-xl font-semibold focus:outline-none focus:shadow-outline 
                  shadow-lg flex items-center justify-center"
                >
                  {loading && (
                    <CircularProgress
                      size={20}
                      color="primary"
                      sx={{ color: "white", mr: 1 }}
                    />
                  )}
                  Next
                </button>
              </Box>
            </div>
          </React.Fragment>
        </Box>
      </div>
    </div>
  );
}
