import React, { FC, useState } from "react";
import { InputField } from "./molecules/InputField";
import "./App.css";
import { useForm } from "react-hook-form";
import { Box, Container, Paper } from "@mui/material";
import { Button } from "./atoms/Button";
import { SelectField } from "./molecules/SelectField";
import { DEPARTMENT, STATES } from "./utils/constants";
import LOGO from "assets/logo-bg-off.png";
import { Employee } from "./utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "./utils/validation";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Header } from "./molecules/Header";
import { Title } from "./atoms/Title";
import { Modal } from "modal-easysam";
import { DateField } from "./molecules/DateField";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const App: FC = () => {
  const [employee, setEmployee] = useState<Employee>({} as Employee);
  const [openModal, setOpenModal] = useState<boolean>(false);

  console.log("employee ==>", employee);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    resolver: yupResolver(employeeSchema),
    reValidateMode: "onBlur",
    shouldFocusError: false,
  });

  const handleEmployee = (data) => {
    const body = { ...data };
    setEmployee(body);
    reset({} as Employee);
  };

  return (
    <>
      <Modal
        isOpen={openModal}
        title="Employee Created!"
        setIsOpen={() => setOpenModal(false)}
        content={<Title component="p" variant="body1" title="Teste de la modal" />}
      />
      <Container maxWidth="lg">
        <Header srcImg={LOGO} altImg="Logo wealth health" />
        <Paper elevation={5} sx={{ height: "100vh", width: "100%", padding: "24px" }}>
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
            <Button label="Open modal" onClick={() => setOpenModal(true)} />
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default App;
