import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { selectEmployees } from "services/employeesReducer";
import Structure from "templates/Structure";
import { Title } from "atoms/Title";

const Employees = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const employees = useSelector(selectEmployees);

  console.log("employees ==>", employees);
  return (
    <Structure
      titleHeader="Create Employee"
      openModal={openModal}
      setOpenModal={() => setOpenModal(false)}
      titleModal={"Employee Created!"}
      contentModal={<Title component="p" variant="body1" title="Teste de la modal" />}
      main={<Typography>Hello Employee List</Typography>}
    />
  );
};

export default Employees;
