import * as yup from 'yup';

export const addUserSchema = yup
    .object({
        name: yup.string().required(),
        lastname: yup.string().required(),
        status: yup.string().required(),
        date: yup.string().required(),
    })
    .required();
