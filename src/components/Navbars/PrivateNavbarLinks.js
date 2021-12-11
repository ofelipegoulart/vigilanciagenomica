import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function PrivateNavbarLinks() {
  const classes = useStyles();

  return (
    <div className={classes.privateNavbarLinksContainer}>
    <a onClick={()=> {
        console.log('teste')
        localStorage.removeItem('@rvg:token')
      }} href="/privado" className={classes.linkText}>Sair</a><br></br>
      </div>
  );
}
