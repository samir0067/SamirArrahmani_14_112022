import { InputHTMLAttributes } from "react";
import * as hookForm from "react-hook-form";

export type VariantTypo =
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2";

export type InputFieldProps = {
  control: hookForm.Control<any> | undefined;
  error: hookForm.FieldErrors;
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  helperText?: any;
  icon?: JSX.Element;
  type?: InputHTMLAttributes<unknown>["type"];
};

export type SelectProps = {
  options: { key: string; label: string }[];
};

export type Employee = {
  firstName: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  street: string;
  zipCode: number;
  city: string;
  state: string;
  department: string;
};

export type HeadCell = {
  id: keyof Employee;
  padding: "none" | "normal" | "checkbox";
  label: string;
  align: "inherit" | "left" | "center" | "right" | "justify";
  minWidth?: number;
};
