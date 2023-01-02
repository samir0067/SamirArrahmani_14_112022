import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "services/storeConfig";
import { Employee } from "utils/types";

/**
 * The initial state of the reducer is passed as first argument
 */
const employees: Employee[] = [];

/**
 * A function utility to create actions for the given type
 */
export const addNewEmployee = createAction<Employee[]>("addNewEmployee");

/**
 *  A function to define a reducer as a response between a type of action
 */
const employeesReducer = createReducer(employees, (builder) =>
  builder.addCase(addNewEmployee, (state, action: PayloadAction<Employee[]>) => {
    state.push(...action.payload);
  }),
);

export const selectEmployees = (state: RootState) => state.employees;
export default employeesReducer;
