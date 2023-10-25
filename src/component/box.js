import { Form, Formik } from "formik";
import { basicSchema } from "../component/schemas/schemas";
import CustomCheckbox from "../component/CustomCheckbox.js";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ acceptedTos: false }}
      validationSchema={basicSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          
         
          <CustomCheckbox type="checkbox" name="acceptedTos" />
         
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;