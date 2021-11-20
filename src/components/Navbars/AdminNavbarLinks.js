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
      <div className={classes.linkText}>
        <a href="/user">Acesso Restrito</a>
      </div>
    </div>
  );
}
