import React, { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { TextField } from "utils/textField.style";
import * as hookForm from "react-hook-form";
import { InputAdornment } from "@mui/material";
import { InputFieldProps } from "utils/types";

/**
 * Generic Date piker field used to enter the form
 * @param {hookForm.FieldErrors} error
 * @param {string} name
 * @param {string} label
 * @param {string} placeholder
 * @param {boolean} disabled
 * @param {React.InputHTMLAttributes} type
 * @param {JSX.Element} icon
 * @param {hookForm.Control<any> | undefined} control
 * @param {any} helperText
 */
const DateField: FC<InputFieldProps> = ({
  control,
  error,
  name,
  label,
  placeholder,
  disabled,
  type,
  icon,
  helperText,
}: InputFieldProps) => {
  return (
    <hookForm.Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label={label}
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={(value) => onChange(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={ref}
                disabled={disabled}
                type={type}
                label={label}
                value={value}
                onBlur={onBlur}
                error={!!error[name]}
                placeholder={placeholder}
                helperText={(error[name] && error[name]?.message) || helperText}
                InputProps={{
                  endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
                }}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateField;
