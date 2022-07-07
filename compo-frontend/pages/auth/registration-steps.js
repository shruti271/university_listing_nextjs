import Image from "next/image";
import CoverImage1 from "../../assets/reg-step-1.png";
import CoverImage2 from "../../assets/reg-step-2.png";
import CoverImage3 from "../../assets/reg-step-3.png";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
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
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { CustomTextField } from "../../components/core/CustomForms";
import { CustomSelect } from "../../components/core/CustomForms";

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

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
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
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function RegistrationSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState([]);
  const [value, setValue] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2"
      style={{ height: "100vh" }}
    >
      <div
        className="p-4 cover-image hidden sm:block"
        style={{ height: "calc(100vh - 30px)" }}
      >
        {activeStep === 0 && <Image src={CoverImage1} alt="CoverImage1" className="animate__animated animate__zoomIn"/>}
        {activeStep === 1 && <Image src={CoverImage2} alt="CoverImage2" className="animate__animated animate__zoomIn"/>}
        {activeStep === 2 && <Image src={CoverImage3} alt="CoverImage3" className="animate__animated animate__zoomIn"/>}
      </div>
      <div className="p-4 ml-0 sm:ml-4 md:ml-4 lg:ml-12">
        <Box>
          
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
            className={
              (activeStep === 0 && "mt-8 sm:mt-16 w-full sm:w-72 ml-0 sm:-ml-9") ||
              (activeStep === 1 && "mt-8 sm:mt-8 w-full sm:w-72 ml-0 sm:-ml-9") ||
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
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <PersonIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Firstname"
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
                    </div>
                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <PersonIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Lastname"
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
                    </div>

                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <DateRangeIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            label="Projected Graduation Date"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => (
                              <CustomTextField
                                {...params}
                                className="w-full"
                                variant="standard"
                              />
                            )}
                          />{" "}
                        </LocalizationProvider>
                      </Box>
                    </div>

                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <LocationOnIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Current Location"
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
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
                <form>
                  <div className="flex flex-col mt-8">
                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <SchoolIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <FormControl variant="standard" className="w-full">
                          <InputLabel id="demo-simple-select-standard-label">
                            Education Level
                          </InputLabel>
                          <CustomSelect
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Education Level"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Box>
                    </div>

                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <SchoolIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Institure Name"
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
                    </div>
                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <LocationOnIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Institure Location"
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
                    </div>

                    <div className="flex justify-center sm:block">
                      <div className="mb-4 mt-2 flex justify-between items-center w-3/4 md:w-5/6 lg:w-3/4">
                        <p className="pb-2 mt-2.5 font-semibold text-md text-[#11142D]">
                          Are you graduated?
                        </p>
                        <ThemeProvider theme={theme}>
                          <FormGroup row>
                            <FormControlLabel
                              value="yes"
                              control={<Checkbox />}
                              label="Yes"
                              labelPlacement="end"
                            />
                            <FormControlLabel
                              value="no"
                              control={<Checkbox />}
                              label="No"
                              labelPlacement="end"
                            />
                          </FormGroup>
                        </ThemeProvider>
                      </div>
                    </div>
                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <DateRangeIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            label="Projected Graduation Date"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => (
                              <CustomTextField
                                {...params}
                                className="w-full"
                                variant="standard"
                              />
                            )}
                          />{" "}
                        </LocalizationProvider>
                      </Box>
                    </div>
                  </div>
                </form>
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
                <form>
                  <div className="flex flex-col mt-8">
                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <WorkIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Desired profession"
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
                    </div>
                    <div className="flex justify-center sm:block">
                      <Box
                        sx={{ display: "flex", alignItems: "flex-end" }}
                        className="mb-6 w-3/4 md:w-5/6 lg:w-3/4"
                      >
                        <LocalLibraryIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
                        <CustomTextField
                          id="input-with-sx"
                          label="Desired major"
                          variant="standard"
                          className="w-full"
                        />
                      </Box>
                    </div>
                  </div>
                </form>
              </div>
            )}
            <div className="flex justify-center sm:block">
              <Box
                sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                className="mt-4 w-3/4 md:w-5/6 lg:w-3/4"
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  className="text-lg text-[#544E5D] font-semibold	 capitalize bg-[#F9F9FA] hover:bg-[#F9F9FA] px-9 py-3 rounded-xl focus:outline-none focus:shadow-outline"
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                  className="bg-[#0364FF] hover:bg-[#0364FF] text-white px-9 py-3 rounded-xl font-semibold focus:outline-none focus:shadow-outline 
                  shadow-lg capitalize text-lg"
                >
                  Next
                </Button>
              </Box>
            </div>
          </React.Fragment>
        </Box>
      </div>
    </div>
  );
}
