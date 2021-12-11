import React, {useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/authStyle.js";

import jwt_decode from 'jwt-decode';
import api from "../api.js";

import Sidebar from "components/PrivateSidebar/Sidebar.js";
import Navbar from "components/Navbars/PrivateNavbarLinks.js";
import privateroutes from "privateRoutes.js";

import bgImage from "assets/img/sidebar-1.png";
import logo from "assets/img/reactlogo.png";

import List from "@material-ui/core/List";

const switchRoutes = (
  <Switch>
    {privateroutes.map((prop, key) => {
      if (prop.layout === "/privado") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/privado" to="/privado/tutorial" />
  </Switch>
);

export default function App( { ...rest } ) {
  // Login

  const [userToken, setUserToken] = useState(localStorage.getItem('@rvg:token'))

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Estilização
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("green");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { username, password });
      localStorage.setItem('@rvg:token', res.data.accessToken)
      setUserToken(res.data.accessToken)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {userToken ? (
        <div className={classes.mainPanel}>
        <Sidebar
          routes={privateroutes}
          logoText={"Acesso Privado da Rede de Vigilância Genômica de Santa Catarina"}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
        <Navbar
          routes={privateroutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        </div>
      ) : (
        <div className={classes.card}>
          <form onSubmit={handleSubmit} className={classes.formSignIn}>
            <span className={classes.formTitle}>Autenticação</span><br></br>
            <input
              type="text"
              placeholder="Usuário"
              onChange={(e) => setUsername(e.target.value)}
              className={classes.underline}
            /><br></br>
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              className={classes.underline}
            /><br></br>
            <button type="submit" className={classes.submitButton}>
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
