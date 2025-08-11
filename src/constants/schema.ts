import * as yup from "yup";

export const contactUsSchema = yup.object({
    name: yup.string().required(),
    subject: yup.string().optional(),
    message: yup.string().required(),
    email: yup.string().email().required(),
});

export const subscribeSchema = yup.object({
    email: yup.string().email().required(),
});