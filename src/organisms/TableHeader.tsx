import React, { FC } from "react";
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Employee, HeadCell } from "utils/types";
import { headCells } from "../utils/headCells";

export type TableHeaderProps = {
  sortingOnRequest: (event: React.MouseEvent<unknown>, property: keyof Employee) => void;
  order: "asc" | "desc";
  orderBy: string;
};

const TableHeader: FC<TableHeaderProps> = ({ sortingOnRequest, order, orderBy }) => {
  const createSortHandler = (property: keyof Employee) => (event: React.MouseEvent<unknown>) => {
    sortingOnRequest(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell: HeadCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.padding}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="checkbox" />
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
