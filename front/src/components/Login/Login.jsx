import React, { useState } from "react";
import "../Signup/Signup.scss";
import { useNavigate, Outlet, Link } from "react-router-dom";

import Header from "../Header/Header";
import Signup from "../Signup/Signup";
import Footer from "../Footer/Footer";

function Login() {
  let navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  const [errorMessage, setErrorMessage] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (apiData) {
        if (apiData.ok) {
          return apiData.json();
        }
      })
      .then((res) => {
        window.localStorage.setItem("token", res.token);
        navigate("/", { replace: true });
        refreshPage();
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`);
        setErrorMessage(true);
      });
  }

  return (
    <>
      <Header />
      <main className="auth__form__container">
        <form onSubmit={onSubmit} className="auth__form">
          <div className="auth__form__input">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Adresse e-mail"
              aria-label="Adresse e-mail"
              required
            ></input>
          </div>
          <div className="auth__form__input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              required
            ></input>
          </div>
          <div>
            <button
              className="auth__button"
              name="login"
              type="submit"
              id="login"
            >
              S'identifier
            </button>
          </div>
          {errorMessage ? (
            <span className="error-message">
              Paire identifiant/mot de passe incorrecte
            </span>
          ) : null}
          <div className="line">Première visite sur l'app ?</div>
          <div>
            <Link to="/auth/signup" element={<Signup />}>
              <button
                className="auth__button auth__button--switch"
                name="signup"
                type="button"
                id="buttonSignup"
              >
                Inscrivez-vous
              </button>
            </Link>
          </div>
          <Outlet />
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
