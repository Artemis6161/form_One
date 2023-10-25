import { useFormik } from "formik";
import { basicSchema } from "../component/schemas/schemas";
import "./form.css"
import Box from "./box"
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      username:"",
      password: "",
  
    },
    validationSchema: basicSchema,
    onSubmit,
  });
console.log(values);
  
  console.log(errors);

  return (
    <div className="continer">
         <div class="Sign-Up">
  <h1>Sign Up</h1>
  <h2> No credit card required</h2>
</div>

 

   
   
    <form onSubmit={handleSubmit} autoComplete="off" className="form-in">
      
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder=" Email address"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
        
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}


      <input
        value={values.username}
        onChange={handleChange}
        id="username"
        type="text"
        placeholder=" Company Name"
        onBlur={handleBlur}
        className={errors.username && touched.username ? "input-error" : ""}
      />
      {errors.username && touched.username && <p className="error">{errors.username}</p>}
     
      
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
        
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
       <Box/>
      <button disabled={isSubmitting} type="submit">
      
Get Started
      </button>
      
    </form>
    <span className="account">
  Already have an account?<span>Sign in</span>
</span>
    </div>
  );
};
export default BasicForm;