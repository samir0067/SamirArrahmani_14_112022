import React, { FC, useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

type DateFieldProps = {};

export const DateField: FC<DateFieldProps> = ({}: DateFieldProps) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date desktop"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
