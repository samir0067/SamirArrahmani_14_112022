import React, { FC } from "react";
import { Modal } from "modal-easysam";
import { Container, Paper } from "@mui/material";
import { Header } from "molecules/Header";
import LOGO from "assets/logo-bg-off.png";
import { Footer } from "molecules/Footer";

type StructureProps = {
  main: JSX.Element;
  contentModal: JSX.Element;
  titleHeader: string;
  titleModal: string;
  openModal: boolean;
  setOpenModal: () => void;
};

const Structure: FC<StructureProps> = ({
  main,
  openModal,
  titleHeader,
  setOpenModal,
  contentModal,
  titleModal,
}: StructureProps) => {
  return (
    <>
      <Modal isOpen={openModal} title={titleModal} setIsOpen={setOpenModal} content={contentModal} />
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
