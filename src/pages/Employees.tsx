import React, { useState } from "react";
import { Typography } from "@mui/material";
import Structure from "../templates/Structure";
import { Title } from "../atoms/Title";

const Employees = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

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
