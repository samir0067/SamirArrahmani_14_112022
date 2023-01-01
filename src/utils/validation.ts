import { object, string } from "yup";

const contentMsg = {
  requiredField: "Please complete this field",
  requiredNumberField: "Must contain 5 numeric characters",
  requiredDateField: "Please indicate a valid date",
};

/**
 * To allow the validation of the fields of the employed object
 */
export const employeeSchema = object().shape({
  firstName: string().required(contentMsg.requiredField).trim(),
  lastName: string().required(contentMsg.requiredField).trim(),
  street: string().required(contentMsg.requiredField).trim(),
  birthDate: string().required(contentMsg.requiredDateField).trim(),
  startDate: string().required(contentMsg.requiredDateField).min(2).trim(),
  zipCode: string().test("length", contentMsg.requiredNumberField, (val) => val?.length === 5),
  city: string().required(contentMsg.requiredField).trim(),
  state: string().required(contentMsg.requiredField).trim(),
  department: string().required(contentMsg.requiredField).trim(),
});
