import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Typography } from "@mui/material";
import { selectEmployees } from "store/employeesReducer";
import useFilterEmployee from "utils/hooks/useFilterEmployee";
import { Employee } from "utils/types";
import Structure from "templates/Structure";
import TableToolbar from "organisms/TableToolbar";
import TableHeader from "organisms/TableHeader";

/**
 * Functional components, with the display of the list of registered employees
 */
const Employees = () => {
  const employees = useSelector(selectEmployees);
  const { applySortFilter, getComparator } = useFilterEmployee();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof Employee>("firstName");
  const [employeesRows, setEmployeesRows] = useState<Employee[]>([]);
  const [filterEmployee, setFilterEmployee] = useState("");

  useEffect(() => {
    if (Array.isArray(employees) && employees.length) {
      const rowsCache: Employee[] = [];
      employees.forEach((value: Employee) => {
        const birthDate = `${new Date(value.birthDate).toLocaleDateString()}`;
        const startDate = `${new Date(value.startDate).toLocaleDateString()}`;
        rowsCache.push({
          firstName: value.firstName,
          lastName: value.lastName,
          birthDate: value.birthDate ? birthDate : "",
          startDate: value.birthDate ? startDate : "",
          street: value.street,
          zipCode: value.zipCode,
          city: value.city,
          state: value.state,
          department: value.department,
        });
      });
      setEmployeesRows(rowsCache);
    }
  }, [employees]);

  const filteredEmployee = applySortFilter(employeesRows, filterEmployee, getComparator(order, orderBy));

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Employee) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Structure
      titleHeader="Create Employee"
      main={
        <>
          <TableToolbar
            filterEmployee={filterEmployee}
            onFilterEmployee={(event) => setFilterEmployee(event.target.value)}
          />
          <TableContainer>
            <Table sx={{ minWidth: 750 }}>
              <TableHeader order={order} orderBy={orderBy} sortingOnRequest={handleRequestSort} />
              <TableBody>
                {filteredEmployee
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell align="center">{row.firstName}</TableCell>
                        <TableCell align="center">{row.lastName}</TableCell>
                        <TableCell align="center">{row.startDate}</TableCell>
                        <TableCell align="center">{row.department}</TableCell>
                        <TableCell align="center">{row.birthDate}</TableCell>
                        <TableCell align="center">{row.street}</TableCell>
                        <TableCell align="center">{row.city}</TableCell>
                        <TableCell align="center">{row.state}</TableCell>
                        <TableCell align="center">{row.zipCode}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              {filteredEmployee.length === 0 && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ paddingY: 3 }}>
                      <Typography variant="body2" align="center">
                        Aucun résultat trouvé pour cette recherche. Essayez une autre saisie.
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            page={page}
            rowsPerPage={rowsPerPage}
            count={employeesRows.length}
            rowsPerPageOptions={[5, 10, 15]}
            onPageChange={(event: unknown, newPage: number) => setPage(newPage)}
            onRowsPerPageChange={(event: ChangeEvent<HTMLInputElement>) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </>
      }
    />
  );
};

export default Employees;
