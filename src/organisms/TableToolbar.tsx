import React, { FC } from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { TextField } from "utils/textField.style";
import useBreakpoints from "utils/hooks/useBreakpoints";

export interface TableToolbarProps {
  filterEmployee: string;
  onFilterEmployee: (event: any) => void;
}

const TableToolbar: FC<TableToolbarProps> = ({ filterEmployee, onFilterEmployee }) => {
  const { downSm } = useBreakpoints();

  return (
    <Toolbar>
      {!downSm && <Box component="div" sx={{ flex: "1 100%" }} />}
      <Typography sx={{ marginRight: "7px" }} variant="h6">
        Search:
      </Typography>
      <TextField type="search" value={filterEmployee} onChange={onFilterEmployee} />
    </Toolbar>
  );
};

export default TableToolbar;
