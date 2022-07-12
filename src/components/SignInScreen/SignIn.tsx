import "./SignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validate from "./LoginFormValidationRules";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/loader";
import { login } from "../../store/profile/auth";
import type { RootState, AppDispatch, IState } from "../../store/store";

function SignIn({ onSubmit }: any) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    signin,
    validate
  );
  const navigate = useNavigate();

  const { user }: any = useSelector<IState>((state) => ({
    user: state.profile.user,
  }));
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const [successful, setSuccessful] = useState<Boolean>(false);

  const hasUser = Boolean(user);

  const handleLogin = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;

    setIsLoading(true);
    setSuccessful(false);
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        setIsLoading(false);

        navigate("/", { replace: true });
      })
      .catch(() => {
        setSuccessful(false);
        setIsLoading(false);
      });
  };

  function signin() {
    handleLogin(values);
  }

  if (!hasUser && isLoading) {
    return <Loader />;
  }

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-in-form__title">Sign In</h2>
        <label
          className={
            errors.email
              ? "trip-popup__input input is-danger"
              : "trip-popup__input input"
          }
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
          Sign In
        </button>
      </form>
      <span>
        Already have an account?
        <Link to="/sign-up" className="sign-in-form__link">
          Sign Up
        </Link>
      </span>
    </main>
  );
}
export default SignIn;
