import React, { FC } from "react";
import { Grid, Paper } from "@mui/material";
import { InputField } from "../molecules/InputField";
import { SelectField } from "../molecules/SelectField";
import { STATES } from "../utils/constants";
import { Employee } from "../utils/types";
import { Control, FieldErrors } from "react-hook-form";

type AddressFormProps = {
  control: Control<Employee>;
  error: FieldErrors<Employee>;
};

/**
 * Functional component of an address information field organization
 * @param {Control<Employee>} control
 * @param {FieldErrors<Employee>} error
 */
const AddressForm: FC<AddressFormProps> = ({ control, error }: AddressFormProps) => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={5} sx={{ padding: "12px" }}>
        <InputField name="street" control={control} error={error} label="Street" />
        <InputField name="zipCode" type="number" control={control} error={error} label="Zip Code" />
        <InputField name="city" control={control} error={error} label="City" />
        <SelectField name="state" control={control} error={error} label="State" options={STATES} />
      </Paper>
    </Grid>
  );
};

export default AddressForm;
