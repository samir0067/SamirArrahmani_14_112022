import React, { FC, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Typography } from "@mui/material";
import { colors } from "utils/constants";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";

/**
 * Footer component with navigation link
 */
export const Footer: FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Box
      bgcolor={colors.secondary}
      height="72px"
      width="100%"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      position="fixed"
      bottom={0}
      zIndex={1.5}
    >
      <Typography color={colors.white}>HRnet</Typography>
      <Box sx={{ minWidth: "288px" }}>
        <BottomNavigation
          sx={{ backgroundColor: colors.secondary }}
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction sx={{ color: colors.white }} label="Create Employee" icon={<AddIcon />} />
          <BottomNavigationAction sx={{ color: colors.white }} label="Current Employees" icon={<ListIcon />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
};
