import React, { FC } from "react";
import { Grid, Paper } from "@mui/material";
import { SelectField } from "../molecules/SelectField";
import { DEPARTMENT } from "../utils/constants";
import { Employee } from "../utils/types";
import { Control, FieldErrors } from "react-hook-form";
import Button from "../atoms/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import useBreakpoints from "../utils/hooks/useBreakpoints";

type DepartmentValidateFormProps = {
  control: Control<Employee>;
  error: FieldErrors<Employee>;
  onClick: () => void;
};

/**
 * Functional component of an organization of information fields on the department and the validation of the form
 * @param {Control<Employee>} control
 * @param {FieldErrors<Employee>} error
 * @param {function} onClick
 */
const DepartmentValidateForm: FC<DepartmentValidateFormProps> = ({
  control,
  error,
  onClick,
}: DepartmentValidateFormProps) => {
  const { downSm } = useBreakpoints();

  return (
    <Grid item xs>
      <Paper
        elevation={5}
        sx={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: downSm ? "center" : "start",
        }}
      >
        <SelectField name="department" control={control} error={error} label="Department" options={DEPARTMENT} />
        <Button label="Save" onClick={onClick} icon={<HowToRegIcon />} />
      </Paper>
    </Grid>
  );
};

export default DepartmentValidateForm;
