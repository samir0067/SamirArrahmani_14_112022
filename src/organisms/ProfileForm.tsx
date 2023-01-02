import React, { FC } from "react";
import { Grid, Paper } from "@mui/material";
import { InputField } from "../molecules/InputField";
import { DateField } from "../molecules/DateField";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Employee } from "../utils/types";
import { Control, FieldErrors } from "react-hook-form";

type ProfilFormProps = {
  control: Control<Employee>;
  error: FieldErrors<Employee>;
};

/**
 * Functional component of an organization of personal information fields
 * @param {Control<Employee>} control
 * @param {FieldErrors<Employee>} error
 */
const ProfileForm: FC<ProfilFormProps> = ({ control, error }: ProfilFormProps) => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={5} sx={{ padding: "12px" }}>
        <InputField name="firstName" control={control} error={error} label="First Name" />
        <InputField name="lastName" control={control} error={error} label="Last Name" />
        <DateField
          name="birthDate"
          control={control}
          error={error}
          label="Date of Birth"
          icon={<CalendarMonthIcon />}
        />
        <DateField name="startDate" control={control} error={error} label="Start date" icon={<CalendarMonthIcon />} />
      </Paper>
    </Grid>
  );
};

export default ProfileForm;
