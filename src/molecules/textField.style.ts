import { TextField as MuiTextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "utils/constants";

/**
 * Style components for form fields
 */
export const TextField = styled(MuiTextField)(() => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    backgroundColor: colors.white,
    borderRadius: "9px",
    "&:hover fieldset": {
      borderColor: colors.primary,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.tertiary,
    },
  },
  label: {
    color: colors.black,
  },
  "& label.Mui-focused": {
    color: colors.tertiary,
  },
  "& .MuiInput-underline:after": {
    borderColor: colors.tertiary,
  },
}));
