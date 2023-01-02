import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "atoms/Button";

/**
 * functional component for the page note found
 */
const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Box>
        <Typography variant="h1">404</Typography>
        <Typography variant="body1">Oops! the page you asked for does not exist.</Typography>
        <Button label="Return to the home page" onClick={() => navigate("/")} />
      </Box>
    </main>
  );
};

export default NotFound;
