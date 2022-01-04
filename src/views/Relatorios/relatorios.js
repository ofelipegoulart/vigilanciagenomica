/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import relatorio1 from "reports/example.pdf";

import styles from "assets/jss/material-dashboard-react/views/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="info">
            <h1>Relatórios Técnicos</h1>
          </CardHeader>
          <CardBody>
            <p> <b>Exemplo de relatório:</b> <a href={relatorio1}> Link de exemplo [em PDF] </a>
 </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
