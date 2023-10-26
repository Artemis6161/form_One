import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema = yup.object().shape({
  email: yup
  .string().email("Please enter a valid email").required("Required"),
  username: yup
  .string()
  .min(3, "Company Name must be at least 3 characters long")
  .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
    acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
{formik.errors["img"] && formik.touched["img"] && (
  <div style={{ color: "#B2484D", fontSize: ".8rem" }}>
    {formik.errors.img}
  </div>
)}
  
