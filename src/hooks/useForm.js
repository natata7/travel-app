import React, { useState, useEffect } from 'react';
import { IErrors } from "../interfaces/Error.interface";
import { IForm } from "../interfaces/Form.interface";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({fullName: '', email: '', password: ''});
  const [errors, setErrors] = useState({fullName: '', email: '', password: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;