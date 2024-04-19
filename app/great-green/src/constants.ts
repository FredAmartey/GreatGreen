import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  username: yup.string().email("Invalid email").required(),
  password: yup.string().required("Please enter a valid password !")
  .min(8, 'Add 8 chars minimum.')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    'At least one letter and one number'
  )
})