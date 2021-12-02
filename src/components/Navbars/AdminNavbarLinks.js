import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();

  return (
    <div>
    <a href="/user" className={classes.linkText}>Acesso Restrito</a><br></br>
    <span className={classes.update}>Última Atualização: 02/12/2021 às 12:25</span>
      </div>
  );
}
