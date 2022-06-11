import "./SignUp.css";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validate from './LoginFormValidationRules';
import { useNavigate } from "react-router-dom";

function SignUp({ onSubmit }) {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(signup, validate);
    const navigate = useNavigate();

    function signup() {
        console.log('No errors, submit callback called!');
        onSubmit(true);
        navigate("/", { replace: true });
    }

    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-up-form"
                autoComplete="off"
                onSubmit={handleSubmit}>
                <h2 className="sign-up-form__title">Sign Up</h2>
                <label className={errors.name ? 'trip-popup__input input is-danger' : 'trip-popup__input input'}>
                    <span className="input__heading">Full name</span>
                    <input name="fullname"
                        type="text"
                        required
                        value={values.fullname || ''}
                        onChange={handleChange} />
                    {errors.fullname && (
                        <p className="help is-danger">{errors.fullname}</p>
                    )}
                </label>
                <label className={`trip-popup__input input ${errors.email && 'is-danger'}`}>
                    <span className="input__heading">Email</span>
                    <input name="email"
                        type="email"
                        required
                        value={values.email || ''}
                        onChange={handleChange} />
                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                    )}
                </label>
                <label className={errors.password ? 'trip-popup__input input is-danger' : 'trip-popup__input input'}>
                    <span className="input__heading">Password</span>
                    <input name="password"
                        type="password" autoComplete="new-password"
                        required
                        value={values.password || ''}
                        onChange={handleChange} />
                    {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                    )}
                </label>
                <button className="button" type="submit">Sign Up</button>
            </form>
            <span>
                Already have an account?
                <Link to="/sign-in"
                    className="sign-up-form__link">Sign In</Link>
            </span>
        </main>
    );
}
export default SignUp;