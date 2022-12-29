import { number, object, string } from "yup";

const contentMsg = {
  requiredField: "Veuillez compléter ce champ",
};

export const employeeSchema = object().shape({
  firstName: string().required(contentMsg.requiredField).trim(),
  lastName: string().required(contentMsg.requiredField).trim(),
  street: string().required(contentMsg.requiredField).trim(),
  birthDate: string().nullable().trim(),
  startDate: string().nullable().trim(),
  zipCode: number().required(contentMsg.requiredField).truncate(),
  city: string().required(contentMsg.requiredField).trim(),
  state: string().required(contentMsg.requiredField).trim(),
  department: string().nullable().trim(),
});
