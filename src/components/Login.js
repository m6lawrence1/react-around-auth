import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onSignin({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <section className="login">
      <div className="login__container">
        <h2 className="form__title">Sign In</h2>
        <form
          action="#"
          className="form form_embedded"
          name="Sign In"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="form__field" htmlFor="email-input">
            <input
              className="form__input form__input_type_email form__input_theme_dark"
              id="email-input"
              type="email"
              title="Email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              required
            />
            <span
              className="form__input-error form__input-error_active"
              id="email-input-error"
            ></span>
          </label>
          <label className="form__field" htmlFor="password-input">
            <input
              className="form__input form__input_type_password form__input_theme_dark"
              id="password-input"
              type="password"
              title="Password"
              name="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
            <span
              className="form__input-error form__input-error_active"
              id="password-input-error"
            ></span>
          </label>
          <button
            type="submit"
            className="form__submit-button form__submit-button_light"
          >
            Log In
          </button>
        </form>
        <Link to="/signup" className="login__link">
          Not a member yet? Sign up here!
        </Link>
      </div>
    </section>
  );
}

export default Login;
