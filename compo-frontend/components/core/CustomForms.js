import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import NativeSelect from '@mui/material/NativeSelect';

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
