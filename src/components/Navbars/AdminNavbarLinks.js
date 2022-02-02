import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();

  return (
    <div className={classes.navbarLinksContainer}>
    <a href="/privado" className={classes.linkText}>Acesso Restrito</a><br></br>
      </div>
  );
}
