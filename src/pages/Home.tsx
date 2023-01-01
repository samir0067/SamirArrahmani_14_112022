import React, { FC, useState } from "react";
import Structure from "templates/Structure";
import { Title } from "atoms/Title";
import { Box, Paper } from "@mui/material";
import { InputField } from "../molecules/InputField";
import { DateField } from "../molecules/DateField";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { SelectField } from "../molecules/SelectField";
import { DEPARTMENT, STATES } from "../utils/constants";
import { Button } from "../atoms/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useForm } from "react-hook-form";
import { Employee } from "../utils/types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { employeeSchema } from "../utils/validation";

/**
 * Home page with the add employee form
 */
const Home: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [employee, setEmployee] = useState<Employee>({} as Employee);

  console.log("employee ==>", employee);

  const {
    // reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    resolver: yupResolver(employeeSchema),
    reValidateMode: "onBlur",
    shouldFocusError: false,
  });

  const handleEmployee = (data: Employee) => {
    setEmployee({ ...data });
    setOpenModal(true);
    // reset({} as Employee);
  };

  return (
    <Structure
      titleHeader="Create Employee"
      openModal={openModal}
      setOpenModal={() => setOpenModal(false)}
      titleModal={"Employee Created!"}
      contentModal={<Title component="p" variant="body1" title="Teste de la modal" />}
      main={
        <Paper elevation={5} sx={{ marginBottom: "96px", width: "100%", padding: "24px" }}>
          <Box component="form">
            <InputField name="firstName" control={control} error={errors} label="First Name" />
            <InputField name="lastName" control={control} error={errors} label="Last Name" />
            <DateField
              name="birthDate"
              control={control}
              error={errors}
              label="Date of Birth"
              icon={<CalendarMonthIcon />}
            />
            <DateField
              name="startDate"
              control={control}
              error={errors}
              label="Start date"
              icon={<CalendarMonthIcon />}
            />
            <InputField name="street" control={control} error={errors} label="Street" />
            <InputField name="zipCode" type="number" control={control} error={errors} label="Zip Code" />
            <InputField name="city" control={control} error={errors} label="City" />
            <SelectField name="state" control={control} error={errors} label="State" options={STATES} />
            <SelectField name="department" control={control} error={errors} label="Department" options={DEPARTMENT} />
            <Button label="Save" onClick={handleSubmit(handleEmployee)} icon={<HowToRegIcon />} />
          </Box>
        </Paper>
      }
    />
  );
};

export default Home;
