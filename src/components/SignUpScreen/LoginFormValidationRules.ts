import IErrors from "../../interfaces/Error.interface";
import IForm from "../../interfaces/Form.interface";

export default function validate(values: IForm) {
    let errors:IErrors = {};
    const numbers = /[0-9]/g;
    const upperCaseLetters = /[A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;
    if (!values.fullName) {
        errors.fullName = 'Full name is required';
      } else if (values.fullName.length < 3) {
        errors.fullName = 'Full name is invalid';
      }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 3 || values.password.length > 20) {
      errors.password = 'Password must be 3 - 20 characters';
    } else if(!values.password.match(numbers)) {
      errors.password = 'Password must contain a number';
    } else if(!values.password.match(upperCaseLetters)) {
      errors.password = 'Password must contain a uppercase letter';
    } else if(!values.password.match(lowerCaseLetters)) {
      errors.password = 'Password must contain a lovercase letter';
    }
    return errors;
  };