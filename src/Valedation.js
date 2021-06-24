import * as yup from "yup"

export const loginSchema = () =>
yup.object({
    email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),

    password: yup
    .string()
    .email("Please enter a valid password")
    .required("Please enter a valid password")
})