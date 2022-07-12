import "./SignUp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
//import { register } from "../../store/profile/auth";
import type { RootState, AppDispatch, IState } from '../../store/store'
import validate from "./LoginFormValidationRules";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/loader";
import { register } from "../../store/profile/auth";

function SignUp() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    signup,
    validate
  );
  const [successful, setSuccessful] = useState<Boolean>(false);

  const navigate = useNavigate();

  const { user }:any = useSelector<IState>(state => ({
    user: state.profile.user
  }));
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  const hasUser = Boolean(user);

  const handleRegister = (formValue: { fullName: string; email: string; password: string }) => {
    const { fullName, email, password } = formValue;
    console.log('sign {fullName, email, password}')
    console.log({ fullName, email, password })
    setIsLoading(true);
    setSuccessful(false);
    dispatch(register({ fullName, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        setIsLoading(false);
        console.log('hello')
        navigate("/", { replace: true });
      })
      .catch(() => {
        setSuccessful(false);
        setIsLoading(false);
        console.log('hello2')
      });
  };

  function signup() {
    handleRegister(values); 
  }

  if (!hasUser && isLoading) {
    return <Loader />;
  }

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label
          className={
            errors.fullName
              ? "trip-popup__input input is-danger"
              : "trip-popup__input input"
          }
        >
          <span className="input__heading">Full name</span>
          <input
            name="fullName"
            type="text"
            required
            value={values.fullName || ""}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="help is-danger">{errors.fullName}</p>
          )}
        </label>
        <label
          className={`trip-popup__input input ${errors.email && "is-danger"}`}
        >
          <span className="input__heading">Email</span>
          <input
            name="email"
            type="email"
            required
            value={values.email || ""}
            onChange={handleChange}
          />
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </label>
        <label
          className={
            errors.password
              ? "trip-popup__input input is-danger"
              : "trip-popup__input input"
          }
        >
          <span className="input__heading">Password</span>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={values.password || ""}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </label>
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
      <span>
        Already have an account?
        <Link to="/sign-in" className="sign-up-form__link">
          Sign In
        </Link>
      </span>
    </main>
  );
}
export default SignUp;

