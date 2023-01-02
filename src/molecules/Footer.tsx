import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "utils/constants";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "atoms/Button";
import useBreakpoints from "utils/hooks/useBreakpoints";

/**
 * Footer component with navigation link
 */
export const Footer: FC = () => {
  const { downSm } = useBreakpoints();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      bgcolor={colors.secondary}
      height="72px"
      width="100%"
      display="flex"
      justifyContent={downSm ? "center" : "space-around"}
      alignItems="center"
      position="fixed"
      bottom={0}
      zIndex={1.5}
    >
      <Typography variant="h5" color={colors.white}>
        HRnet
      </Typography>
      <Box maxWidth="224px">
        <Button
          label="Create Employee"
          margin="0"
          padding="5px 10px"
          size={location.pathname === "/" ? "large" : "small"}
          variant="text"
          sx={{ height: "35px" }}
          onClick={() => navigate("/")}
          icon={<AddIcon />}
        />
        <Button
          label="Current Employees"
          margin="0"
          padding="5px 10px"
          size={location.pathname === "/employees" ? "large" : "small"}
          sx={{ height: "35px" }}
          variant="text"
          onClick={() => navigate("/employees")}
          icon={<ListIcon />}
        />
      </Box>
    </Box>
  );
};
