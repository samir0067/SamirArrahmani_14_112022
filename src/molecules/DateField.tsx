import React, { FC, InputHTMLAttributes } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { TextField } from "utils/textField.style";
import * as hookForm from "react-hook-form";
import { InputAdornment } from "@mui/material";

type DateFieldProps = {
  control: hookForm.Control<any> | undefined;
  error: hookForm.FieldErrors;
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  helperText?: any;
  icon?: JSX.Element;
  type?: InputHTMLAttributes<unknown>["type"];
};

export const DateField: FC<DateFieldProps> = ({
  control,
  error,
  name,
  label,
  placeholder,
  disabled,
  type,
  icon,
  helperText,
}: DateFieldProps) => {
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
