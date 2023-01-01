import React, { FC } from "react";
import { Title } from "../atoms/Title";
import useBreakpoints from "../utils/hooks/useBreakpoints";
import { Box, SxProps } from "@mui/material";

type HeaderProps = {
  srcImg: string;
  altImg: string;
  sx?: SxProps;
};

/**
 * Header component of the application
 * @param {string} srcImg
 * @param {string} altImg
 * @param {SxProps} sx
 */
export const Header: FC<HeaderProps> = ({ srcImg, sx, altImg }) => {
  const { downSm } = useBreakpoints();

  return (
    <Box
      display="flex"
      flexDirection={downSm ? "column" : "row"}
      alignItems="center"
      justifyContent={downSm ? "center" : "space-between"}
      sx={{ ...sx }}
    >
      <img height="auto" src={srcImg} alt={altImg} />
      <Title slideDirection="left" component="h2" variant={downSm ? "h3" : "h2"} title="WEALTH HEALTH" />
    </Box>
  );
};
