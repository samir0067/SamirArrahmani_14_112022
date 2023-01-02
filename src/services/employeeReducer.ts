import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "services/storeConfig";
import { Employee } from "utils/types";

/**
 * The initial state of the reducer is passed as first argument
 */
const employee: Employee = {
  firstName: "",
  lastName: "",
  birthDate: "",
  startDate: "",
  address: {
    street: "",
    zipCode: parseInt(""),
    city: "",
    state: "",
  },
  department: "",
};

/**
 * A function utility to create actions for the given type
 */
export const createEmployee = createAction<Employee>("createEmployee");

/**
 *  A function to define a reducer as a response between a type of action
 */
const employeeReducer = createReducer(employee, (builder) =>
  builder.addCase(createEmployee, (state, action: PayloadAction<Employee>) => {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      birthDate: action.payload.birthDate,
      startDate: action.payload.startDate,
      department: action.payload.department,
      address: {
        street: action.payload.address.street,
        zipCode: action.payload.address.zipCode,
        city: action.payload.address.city,
        state: action.payload.address.state,
      },
    };
  }),
);

export const selectEmployee = (state: RootState) => state.employee;
export default employeeReducer;
