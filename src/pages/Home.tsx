import React, { FC, useState } from "react";
import Structure from "templates/Structure";
import { Title } from "atoms/Title";
import { useForm } from "react-hook-form";
import { Employee } from "../utils/types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { employeeSchema } from "../utils/validation";
import ProfileForm from "../organisms/ProfileForm";
import AddressForm from "../organisms/AddressForm";
import { Box, Grid } from "@mui/material";
import DepartmentValidateForm from "../organisms/DepartmentValidateForm";

/**
 * Home page with the add employee form
 */
const Home: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [employee, setEmployee] = useState<Employee>({} as Employee);

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

  const handleEmployee = (data: Employee) => {
    setEmployee({ ...data });
    setOpenModal(true);
    reset({} as Employee);
  };

  return (
    <Structure
      titleHeader="Create Employee"
      openModal={openModal}
      setOpenModal={() => setOpenModal(false)}
      titleModal={"Employee Created!"}
      contentModal={<Title component="p" variant="body1" title="Teste de la modal" />}
      main={
        <Box component="form">
          <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, md: 3 }}>
            <ProfileForm control={control} error={errors} />
            <AddressForm control={control} error={errors} />
            <DepartmentValidateForm control={control} error={errors} onClick={handleSubmit(handleEmployee)} />
          </Grid>
        </Box>
      }
    />
  );
};

export default Home;
