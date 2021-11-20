import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
import People from "@material-ui/icons/People";
//core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/authStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/auth") {
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
    <Redirect from="/auth" to="/auth" />
  </Switch>
);

const useStyles = makeStyles(styles);


export default function Auth({ ...rest }) {
  const classes = useStyles();
  return (
    <Grid className={classes.mainPanel}>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      labelText="Usuário"
      id="float"
      formControlProps={{
        fullWidth: false
      }}
    />
  </GridItem>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      labelText="Senha"
      id="float"
      formControlProps={{
        fullWidth: false
      }}
    />
  </GridItem>
  <Button type="button" color="info" className={classes.submitButton}>Entrar</Button>
</Grid>

  );
}
