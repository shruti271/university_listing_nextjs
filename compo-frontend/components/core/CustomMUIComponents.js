import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import NativeSelect from '@mui/material/NativeSelect';
import { LinearProgress, linearProgressClasses, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

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

export const CustomBorderLinearProgress = styled(LinearProgress)(({ theme, setColor }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: "#F9F9FA",

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: setColor,
  },
}));


export const CustomTab = styled(Tabs)(({ theme }) => ({
  [`& .MuiTab-root`]: {
    textTransform: "none",
    color: "#959595",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "21px",
    minHeight: "55px",
    justifyContent: "start",
    width: "100%"
  },
  [`& .Mui-selected`]: {
    color: "#0364FF",
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
