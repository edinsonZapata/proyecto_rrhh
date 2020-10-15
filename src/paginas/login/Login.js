import React, { useState } from "react";
import Title from "./componentesLogin/title/Title";
import Label from "./componentesLogin/label/Label";
import Input from "./componentesLogin/input/Input";
import Home from "../home/Home";

import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [login, setLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);

  function handleChange(name, value) {
    if (name === "Usuario") {
      setUser(value);
    } else {
      if (value < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "Edinson" && param.password === "123456") {
        const { user, password } = param;
        let datosUsuario = { user, password };
        let cuentaLocal = JSON.stringify(datosUsuario);
        localStorage.setItem("CuentaLocal", cuentaLocal);
        setLogin(true);
      } else {
        setLogin(false);
        setLoginError(true);
      }
    } else {
      setLogin(false);
      setLoginError(true);
    }
  }

  function handleSubmit() {
    let cuentaUsuario = { user, password };
    if (cuentaUsuario) {
      ifMatch(cuentaUsuario);
    }
  }

  return (
    <div className="login-container">
      {login ? (
        <Home />
      ) : (
        <div className="login-contenido">
          <Title text="Bienvenido" />
          <Title text="Ingrese usuario y clave" />
          {loginError && (
            <label className="label-alerta">Clave o usuario incorrectos</label>
          )}
          <Label text="Usuario" />
          <Input
            attribute={{
              id: "Usuario",
              name: "Usuario",
              type: "text",
              placeholder: "Ingrese su usuario",
            }}
            handleChange={handleChange}
          />
          <Label text="Clave" />
          <Input
            attribute={{
              id: "Clave",
              name: "Clave",
              type: "password",
              placeholder: "Ingrese su clave",
            }}
            handleChange={handleChange}
            param={passwordError}
          />
          {passwordError && (
            <label className="label-error">Constraseña incorrecta</label>
          )}
          <div>
            <button className="boton-ingresar" onClick={handleSubmit}>
              Ingresar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
