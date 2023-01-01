import React, { FC } from "react";
import * as hookForm from "react-hook-form";
import { TextField } from "utils/textField.style";
import { InputFieldProps, SelectProps } from "../utils/types";

/**
 * Generic select field used to enter the form
 * @param {hookForm.Control<any> | undefined} control
 * @param helperText
 * @param {hookForm.FieldErrors} error
 * @param {string} name
 * @param {string} label
 * @param {boolean} disabled
 * @param {string} placeholder
 * @param {Object[]} options
 */
export const SelectField: FC<InputFieldProps & SelectProps> = ({
  control,
  helperText,
  error,
  name,
  label,
  placeholder,
  disabled,
  options,
}: InputFieldProps & SelectProps) => {
  return (
    <hookForm.Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          select
          inputRef={ref}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          label={label}
          onBlur={onBlur}
          error={!!error[name]}
          helperText={(error[name] && error[name]?.message) || helperText}
          onChange={(newValue) => onChange(newValue)}
          variant="outlined"
          SelectProps={{ native: true }}
        >
          <option aria-label="None" value="" />
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </TextField>
      )}
    />
  );
};
