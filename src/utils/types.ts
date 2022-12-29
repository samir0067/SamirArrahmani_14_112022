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

export type Address = {
  street: string;
  zipCode: number;
  city: string;
  state: string;
};

export type Employee = {
  firstName: string;
  lastName: string;
  birthDate?: string;
  startDate?: string;
  address: Address;
  department?: string;
};
