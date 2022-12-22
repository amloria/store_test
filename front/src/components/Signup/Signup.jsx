import React, { useState } from "react";
import "./Signup.scss";
import { Outlet, Link } from "react-router-dom";

import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";

function Signup() {
  const [success, setSuccess] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formInputs = [
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Adresse e-mail",
      label: "Adresse e-mail",
      required: true,
      pattern: `[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+$`,
      errormessage: "Adresse e-mail invalide",
    },
    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Mot de passe",
      label: "Mot de passe",
      required: true,
      pattern: `^(?=.*[0-9]{2,18})[a-zA-Z0-9]{8,100}$`,
      errormessage:
        "Le mot de passe doit être composé de 8 caractères minimum, dont une lettre majuscule, une lettre minuscule et au moins deux chiffres",
    },
    {
      type: "password",
      name: "confirmPassword",
      id: "confirmPassword",
      placeholder: "Confirmez votre mot de passe",
      label: "Confirmez votre mot de passe",
      required: true,
      pattern: formValues.password,
      errormessage: "Les mots de passe ne correspondent pas",
    },
  ];

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (apiData) {
        if (apiData.ok) {
          return apiData.json();
        }
      })
      .then(() => {
        setSuccess(true);
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`);
      });
  }

  return (
    <>
      <Header />
      <main className="auth__form__container">
        <form className="auth__form" onSubmit={onSubmit}>
          {formInputs.map((input) => (
            <div key={input.id} className="auth__form__input">
              <FormInput
                {...input}
                value={formValues[input.name]}
                onChange={onChange}
              ></FormInput>
            </div>
          ))}
          <div>
            <button
              className="auth__button"
              name="signup"
              type="submit"
              id="signup"
            >
              S'inscrire
            </button>
            {success ? (
              <div className="auth-success">
                <h4>Compte créé avec succès</h4>
                <p>
                  Vous pouvez maintenant vous connecter en vous identifiant.
                </p>
              </div>
            ) : null}
          </div>
          <div className="line">Déjà inscrit(e) ?</div>
          <div>
            <Link to="/auth/login" element={<Login />}>
              <button
                className="auth__button auth__button--switch"
                name="signup"
                type="button"
                id="buttonSignup"
              >
                Identifiez-vous
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

export default Signup;
