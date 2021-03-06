import IErrors from "../../interfaces/Error.interface";
import IForm from "../../interfaces/Form.interface";

export default function validate(values: IForm) {
    let errors:IErrors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 3 || values.password.length > 20) {
      errors.password = 'Password must be 3 - 20 characters';
    }
    return errors;
  };