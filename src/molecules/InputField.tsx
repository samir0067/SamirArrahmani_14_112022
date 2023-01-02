import React, { FC } from "react";
import * as hookForm from "react-hook-form";
import { InputAdornment } from "@mui/material";
import { TextField } from "utils/textField.style";
import { InputFieldProps } from "utils/types";

/**
 * Generic text field used to enter the form
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
const InputField: FC<InputFieldProps> = ({
  control, //
  error, //
  name, //
  label, //
  placeholder, //
  disabled,
  type,
  icon,
  helperText, //
}: InputFieldProps) => {
  return (
    <hookForm.Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          inputRef={ref}
          disabled={disabled}
          type={type}
          label={label}
          value={value}
          onBlur={onBlur}
          error={!!error[name]}
          placeholder={placeholder}
          helperText={(error[name] && error[name]?.message) || helperText}
          onChange={(value1) => onChange(value1)}
          InputProps={{
            endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
          }}
        />
      )}
    />
  );
};

InputField.defaultProps = {
  type: "text",
};

export default InputField;
