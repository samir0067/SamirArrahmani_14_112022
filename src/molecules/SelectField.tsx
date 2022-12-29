import React, { FC } from "react";
import * as hookForm from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { TextField } from "molecules/textField.style";

export type SelectFieldProps = {
  options: { key: string | number; label: string }[];
  control: hookForm.Control<any> | undefined;
  error: FieldErrors;
  name: string;
  label: string;
  placeholder?: string;
  helperText?: any;
};

/**
 * Generic select field used to enter the form
 * @param {hookForm.Control<any> | undefined} control
 * @param helperText
 * @param {FieldErrors} error
 * @param {string} name
 * @param {string} label
 * @param {string} placeholder
 * @param {{ key: string | number; label: string }[]} options
 */
export const SelectField: FC<SelectFieldProps> = ({
  control,
  helperText,
  error,
  name,
  label,
  placeholder,
  options,
}: SelectFieldProps) => {
  return (
    <hookForm.Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          select
          inputRef={ref}
          placeholder={placeholder}
          value={value}
          label={label}
          onBlur={onBlur}
          error={!!error[name]}
          helperText={(error[name] && error[name]?.message) || helperText}
          onChange={(newValue) => onChange(newValue)}
          variant="outlined"
          sx={{ my: "0.7rem" }}
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
