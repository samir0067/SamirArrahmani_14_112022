import React, { FC } from "react";
import Title from "atoms/Title";
import useBreakpoints from "utils/hooks/useBreakpoints";
import { Box, SxProps } from "@mui/material";

type HeaderProps = {
  title: string;
  srcImg: string;
  altImg: string;
  sx?: SxProps;
};

/**
 * Header component of the application
 * @param {string} title
 * @param {string} srcImg
 * @param {string} altImg
 * @param {SxProps} sx
 */
const Header: FC<HeaderProps> = ({ title, srcImg, sx, altImg }) => {
  const { downSm } = useBreakpoints();

  return (
    <Box
      display="flex"
      flexDirection={downSm ? "column" : "row"}
      alignItems="center"
      justifyContent={downSm ? "center" : "space-around"}
      sx={{ ...sx }}
    >
      <img width="150px" height="auto" src={srcImg} alt={altImg} />
      <Title slideDirection="down" component="h2" variant={downSm ? "h5" : "h3"} title={title} />
    </Box>
  );
};

export default Header;
