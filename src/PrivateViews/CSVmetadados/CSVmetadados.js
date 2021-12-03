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

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h1>CSV Metadados</h1>
          </CardHeader>
          <CardBody>
            <p>No formulário abaixo, insira o arquivo .csv contendo as amostras. Caso você esteja com o Microsoft Excel ou software similar e não saiba como salvar o arquivo em .csv, siga os tutoriais abaixo:</p>
            <p><b>Tutorial no Microsoft Excel: </b><a href="#">Link aqui</a></p>
            <p><b>Tutorial no Google Sheets: </b><a href="#">Link aqui</a></p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
