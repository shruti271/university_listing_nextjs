import Image from "next/image";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import * as React from "react";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import PropTypes from "prop-types";
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
import { CustomTextField } from "../../components/core/CustomForms";
import { useForm, Controller } from "react-hook-form";
import Router from "next/router";
import { onBoarding } from "../../services/auth";
import CoverImage1 from "../../assets/reg-step-1.png";
import CoverImage2 from "../../assets/reg-step-2.png";
import CoverImage3 from "../../assets/reg-step-3.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0364ff",
    },
  },
});

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#0364FF",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#0364FF",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#0364FF",
    zIndex: 1,
    fontSize: 24,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {active ? (
        <RadioButtonCheckedIcon className="QontoStepIcon-completedIcon" />
      ) : completed ? (
        <CheckCircleOutlineIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <RadioButtonUncheckedIcon className="QontoStepIcon-completedIcon" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = ["About", "Education", "Profession"];

export default function RegistrationSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState([]);
  const [email, setEmail] = React.useState();
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
    setEmail(email)
  }, [])

  console.log("Email Provide: ", email);

  const formatDate = (date) => {
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: '2-digit' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return year + '-' + month + '-' + day;
  }

  const onSubmit = async (data) => {
    if (activeStep !== 2) {
      handleNext();
    } else {

      console.log("Data To be Submitted !!", data)
      console.log("email !!", email)

      const response = await onBoarding({
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
      });
      console.log("resss", response)
      if (response.success) {
        localStorage.removeItem("email");
        localStorage.setItem("access_token", response.data.access_token)
        localStorage.setItem("refresh_token", response.data.refresh_token)
        Router.push("/home");
      }
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
    console.log("errors :", errors)
  }, [errors])

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2"
      style={{ height: "100vh" }}
    >
      <div
        className="p-4 cover-image hidden sm:block"
        style={{ height: "calc(100vh - 30px)" }}
      >
        {activeStep === 0 && (
          <Image
            src={CoverImage1}
            alt="CoverImage1"
            className="animate__animated animate__zoomIn"
          />
        )}
        {activeStep === 1 && (
          <Image
            src={CoverImage2}
            alt="CoverImage2"
            className="animate__animated animate__zoomIn"
          />
        )}
        {activeStep === 2 && (
          <Image
            src={CoverImage3}
            alt="CoverImage3"
            className="animate__animated animate__zoomIn"
          />
        )}
      </div>
      <div className="p-4 ml-0 sm:ml-4 md:ml-4 lg:ml-12">
        <Box>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
            className={
              (activeStep === 0 &&
                "mt-8 sm:mt-16 w-full sm:w-72 ml-0 sm:-ml-9") ||
              (activeStep === 1 &&
                "mt-8 sm:mt-8 w-full sm:w-72 ml-0 sm:-ml-9") ||
              (activeStep === 2 && "mt-8 sm:mt-36 w-full sm:w-72 ml-0 sm:-ml-9")
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
                <h3 className="pb-2 mt-8 font-semibold text-2xl text-[#03014C] flex justify-center sm:block">
                  Tell us about yourself
                </h3>
                <p className=" text-[#92929D] text-base mb-4 flex justify-center sm:block">
                  No data will be shared to any third party
                </p>
                <form>
                  <div className="flex flex-col mt-8">
                    <div className="flex justify-center sm:block">
                      <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
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
                      <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
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
                      <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <DateRangeIcon
                            sx={{ mr: 2, my: 0.5 }}
                            className="text-black"
                          />
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            {/* <DesktopDatePicker
                              label="Date of Birth"
                              value={date}
                              onChange={(newDate) => {
                                setDate(newDate);
                              }}
                             
                              renderInput={(params) => (
                                <CustomTextField
                                  {...params}
                                  className="w-full"
                                  variant="standard"
                                   {...register("dob", {
                                required: "Date of Birth is required",
                              })}
                                />
                              )}
                            /> */}

                            {/* <Controller
                            name="date_of_birth"
                            control={control}
                            defaultValue={null}
                            render={({
                              field: { ref, ...rest },
                              fieldState: { error },
                            }) => (
                              <DesktopDatePicker
                                label="Date of Birth"
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
                          /> */}

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
                          {errors.date_of_birth?.type && errors.date_of_birth?.type === "required" && (
                            <span style={{ color: "red" }} className="-mb-6">
                              Date of birth is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* <span style={{ color: "red" }}>{errors.dob?.message}</span> */}

                    <div className="flex sm:block justify-center">
                      <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <LocationOnIcon
                            sx={{ mr: 2, my: 0.5 }}
                            className="text-black"
                          />
                          <CustomTextField
                            id="input-with-sx"
                            label="Current Location"
                            variant="standard"
                            className="w-full"
                            {...register("current_location", {
                              required: "Current Location is required",
                            })}
                          />
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
                <h3 className="pb-2 mt-8 font-semibold text-2xl text-[#03014C] flex justify-center sm:block">
                  Insights of your education
                </h3>
                <p className=" text-[#92929D] text-base mb-4 flex justify-center sm:block">
                  For us to filter the best results for you
                </p>

                <div className="flex flex-col mt-8">
                  <div className="flex justify-center sm:block">
                    <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
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
                    <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <SchoolIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
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
                    <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <LocationOnIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Institute Location"
                          variant="standard"
                          className="w-full"
                          {...register("institute_location", {
                            required: "Institute Location is required",
                          })}
                        />
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
                  <div className="flex justify-center sm:block">
                    <div className="mb-4 mt-2 flex justify-between items-center w-3/4 md:w-5/6 lg:w-3/4">
                      <p className="pb-2 mt-2.5 font-semibold text-md text-[#11142D] ml-9">
                        Are you graduated?
                      </p>
                      <ThemeProvider theme={theme}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-form-control-label-placement"
                          name="position"
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
                    <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <DateRangeIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          {/* <DesktopDatePicker
                              label="Projected Graduation Date"
                              value={gDate}
                              onChange={(newGDate) => {
                                setGDate(newGDate);
                              }}
                              renderInput={(params) => (
                                <CustomTextField
                                  {...params}
                                  className="w-full"
                                  variant="standard"
                                />
                              )}
                            /> */}
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
                        {errors.graduated_date?.type && errors.graduated_date?.type === "required" && (
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
                <h3 className="pb-2 mt-8 font-semibold text-2xl text-[#03014C] flex justify-center sm:block">
                  Your future plans
                </h3>
                <p className=" text-[#92929D] text-base mb-4 flex justify-center sm:block">
                  To serve the best possible way
                </p>
                <div className="flex flex-col mt-8">
                  <div className="flex justify-center sm:block">
                    <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
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
                    <div className="flex  sm:block flex-col mb-6 w-3/4 md:w-5/6 lg:w-3/4">
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
            <div className="flex justify-center sm:block">
              <Box
                sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                className="mt-4 w-3/4 md:w-5/6 lg:w-3/4"
              >
                <button
                  type="submit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="text-[#544E5D] font-semibold mr-1 bg-[#F9F9FA] hover:bg-[#F9F9FA] px-9 py-3 rounded-xl focus:outline-none focus:shadow-outline"
                >
                  Back
                </button>
                <Box sx={{ flex: "1 1 auto" }} />

                <button
                  type="submit"
                  // onClick={handleNext}
                  onClick={handleSubmit(onSubmit, onError)}
                  className="bg-[#0364FF] hover:bg-[#0364FF] mr-1 text-white px-9 py-3 rounded-xl font-semibold focus:outline-none focus:shadow-outline 
                  shadow-lg"
                >
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
