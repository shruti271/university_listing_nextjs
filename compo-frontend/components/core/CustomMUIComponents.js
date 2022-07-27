import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import NativeSelect from '@mui/material/NativeSelect';
import { LinearProgress, linearProgressClasses, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";


export const CustomTextField = styled(TextField)(({ theme }) => ({
  [`& .MuiInput-input`]: {
    fontWeight: 600,
    color: "#000000",
  },
  [`& .MuiInput-root:after`]: {
    borderBottom: 0,
  },
  [`& label`]: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "30px",

    color: "#544E5D",

    opacity: 0.5,
  },
  [`& .MuiInputLabel-root.Mui-focused`]: {
    color: "#544E5D",
  },


}));

export const CustomSelect = styled(NativeSelect)(({ theme }) => ({
  [`& .MuiInput-input`]: {
    fontWeight: 600,
    color: "#000000",
  },
  [`& .MuiInput-root:after`]: {
    borderBottom: 0,
  },
  [`& label`]: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "30px",

    color: "#544E5D",

    opacity: 0.5,
  },

  [`& .MuiInputLabel-root.Mui-focused`]: {
    color: "#544E5D",
  },
}));

export const CustomBorderLinearProgress = styled(LinearProgress)(({ theme, setcolor }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: "#F9F9FA",

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: setcolor,
  },
}));


export const CustomTab = styled(Tabs)(({ theme, setwidth, setjustifycontent }) => ({
  [`& .MuiTab-root`]: {
    textTransform: "none",
    color: "#959595",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "21px",
    minHeight: "55px",
    paddingTop: "5px",
    paddingBottom: "5px",
    justifyContent: setjustifycontent,
    width: setwidth
  },
  [`& .Mui-selected`]: {
    color: "#0364FF !important",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",

  },
  [`& .MuiTabs-indicator`]: {
    left: 0,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#0364FF",
    maxHeight: 25,
    alignItems: "center",
    marginTop: 15,
    borderRadius: "0px 100px 100px 0px"
  },

  [`& .MuiTabs-flexContainer`]: {
    alignItems: "start"
    }
}));


export const CustomMajorsTab = styled(Tabs)(({ theme, setwidth, setjustifycontent }) => ({
  [`& .MuiTab-root`]: {
    textTransform: "none",
    color: "#757575",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    minHeight: "55px",
    paddingTop: "15px",
    paddingBottom: "0px",
    justifyContent: setjustifycontent,
    width: setwidth
  },
  [`& .Mui-selected`]: {
    color: "#1C1D1F !important",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "140%",

  },
  [`& .MuiTabs-indicator`]: {
    left: 0,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#0038FF",
    maxHeight: 25,
    alignItems: "center",
    marginTop: 15,
    borderRadius: "0px 100px 100px 0px"
  },

  [`& .MuiTabs-flexContainer`]: {
    alignItems: "start"
  }
}));


export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



export const QontoConnector = styled(StepConnector)(({ theme }) => ({
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

export function QontoStepIcon(props) {
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