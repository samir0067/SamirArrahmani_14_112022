import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";
import employees from "./employeesReducer";

/**
 * the root of the reducers combined
 */
const storeConfig = configureStore({
  reducer: combineReducers({
    employees,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof storeConfig.getState>;
export default storeConfig;
