import React, { FC, useEffect } from "react";
import { Modal } from "modal-easysam";
import { Container, Paper } from "@mui/material";
import Header from "molecules/Header";
import LOGO from "assets/logo-bg-off.png";
import Footer from "molecules/Footer";
import { getEmployees } from "../store/employeesReducer";
import { useDispatch } from "react-redux";

type StructureProps = {
  main: JSX.Element;
  titleHeader: string;
  openModal?: boolean;
  setOpenModal?: () => void;
  titleModal?: string;
  contentModal?: JSX.Element;
};

const Structure: FC<StructureProps> = ({
  main,
  openModal,
  titleHeader,
  setOpenModal,
  contentModal,
  titleModal,
}: StructureProps) => {
  const dispatch = useDispatch();
  const isModal = !!(titleModal && contentModal && openModal && setOpenModal);
  const localEmployees = JSON.parse(localStorage.getItem("employees")!) || [];

  useEffect(() => {
    if (localStorage.getItem("employees") !== null) {
      dispatch(getEmployees(localEmployees));
    }
  }, []);

  return (
    <>
      {isModal && <Modal isOpen={openModal} title={titleModal} setIsOpen={setOpenModal} content={contentModal} />}
      <Header title={titleHeader} srcImg={LOGO} altImg="Logo wealth health" />
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ marginBottom: "96px", width: "auto", padding: "12px" }}>
          {main}
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Structure;
