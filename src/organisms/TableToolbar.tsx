import React, { FC } from "react";
import { InputAdornment, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "utils/textField.style";

export interface TableToolbarProps {
  filterEmployee: string;
  onFilterEmployee: (event: any) => void;
}

const TableToolbar: FC<TableToolbarProps> = ({ filterEmployee, onFilterEmployee }) => {
  return (
    <Toolbar>
      <Typography sx={{ flex: "1 100%" }} variant="h6" id="tableTitle" component="div">
        Search:
      </Typography>
      <TextField
        type="search"
        value={filterEmployee}
        onChange={onFilterEmployee}
        InputProps={{
          endAdornment: <InputAdornment position="end">{<SearchIcon />}</InputAdornment>,
        }}
      />
    </Toolbar>
  );
};

export default TableToolbar;
