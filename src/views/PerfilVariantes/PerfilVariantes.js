import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { data } from "variables/PieData.js";

import styles from "assets/jss/material-dashboard-react/views/variantStyle.js";

const useStyles = makeStyles(styles);

export default function PerfilVariantes() {
  const classes = useStyles();


  return (
    <div>
    </div>
  );
}
