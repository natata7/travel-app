export default function validate(values) {
    let errors = {};
    if (!values.fullname) {
        errors.fullname = 'Full name is required';
      } else if (values.fullname < 3) {
        errors.fullname = 'Full name is invalid';
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
    }
    return errors;
  };