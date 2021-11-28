import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import jwt_decode from 'jwt-decode';
import styles from "assets/jss/material-dashboard-react/layouts/authStyle.js";
import sidebarStyles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import api from "../api.js";

import privateroutes from "privateRoutes.js";

import bgImage from "assets/img/sidebar-1.png";
import logo from "assets/img/reactlogo.png";

let ps;

import List from "@material-ui/core/List";

import { Switch, Route, Redirect } from "react-router-dom";

export default function App( { ...rest } ) {
  const useStyles = makeStyles(styles);
  const useSidebarStyles = makeStyles(sidebarStyles);
  const classes = useStyles();
  const sidebarClasses = useSidebarStyles();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image) => {
    setImage(image);
  };
  const handleColorClick = (color) => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", { username, password });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setSuccess(false);
    setError(false);
    try {
      await axiosJWT.delete("/users/" + id, {
        headers: { authorization: "Bearer " + user.accessToken },
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  const switchRoutes = (
    <Switch>
      {privateroutes.map((prop, key) => {
        if (prop.layout === "/user") {
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
      <Redirect from="/user" to="/user/tutorial/" />
    </Switch>
  );

  return (
    <div>
      {user ? (
        <div className={classes.mainPanel}>
        <Sidebar
          routes={privateroutes}
          logoText={"Acesso Privado da RVG/SC"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
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

/* uppercase */
