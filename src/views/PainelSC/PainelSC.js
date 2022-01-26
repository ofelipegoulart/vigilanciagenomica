import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function PainelSC() {
  const classes = useStyles();
  return (
    <div>
    <GridContainer>
    <GridItem xs={12} sm={12} md={4}>
    <CardHeader color="info">
      <h3 className={classes.cardTitleWhite}>Amostras por Sexo</h3>
    </CardHeader>
    <Card chart className={classes.pieChartVariant}>
          <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/fc3d9601-a2a0-47bf-a0ee-2a85447264c7"
    frameborder="0"
    width="90%"
    height="100%"
    allowtransparency
    style={{marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}
    >
</iframe>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={8}>
    <CardHeader color="info">
      <h3 className={classes.cardTitleWhite}>Sequências por Faixa Etária</h3>
    </CardHeader>
    <Card chart className={classes.pieChartVariant}>
          <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/dd6999a0-0b70-4c2b-b8c7-481e8fe4de54"
    frameborder="0"
    width="90%"
    height="100%"
    allowtransparency
    style={{marginTop:"5px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
    </Card>
    </GridItem>
    </GridContainer>
    <div className={classes.spacing} style={{marginBottom:"10px"}}>&nbsp;</div>
    <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
    <CardHeader color="info">
      <h3 className={classes.cardTitleWhite}>Variantes por Semana Epidemiológica (Total)</h3>
    </CardHeader>
    <Card chart>
          <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/2bd55eb8-dd90-4822-a5d8-50d52654f279"
    frameborder="0"
    width="90%"
    height="100%"
    allowtransparency
    style={{marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
    </Card>
    </GridItem>
    </GridContainer>
    <div className={classes.spacing} style={{marginBottom:"10px"}}>&nbsp;</div>
    <GridContainer>
    <GridItem xs={12} sm={12} md={8}>
    <CardHeader color="info">
      <h3 className={classes.cardTitleWhite}>Sequências por Regional de Saúde</h3>
    </CardHeader>
    <Card chart className={classes.pieChartVariant}>
          <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/013ba2a6-19e0-4000-a47a-af736be5c702"
    frameborder="0"
    width="90%"
<<<<<<< HEAD
    height="550"
=======
    height="100%"
>>>>>>> d25c32514ec13ee871d49532555886ee3a37c51d
    allowtransparency
    style={{marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
    </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={4}>
    <CardHeader color="info">
      <h4 className={classes.cardTitleWhite}>Municípios Analisados</h4>
    </CardHeader>
    <Card chart className={classes.pieChartVariant}>
          <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/07108748-3aee-40b6-bf06-661b2a054737"
    frameborder="0"
    width="90%"
    height="550"
    allowtransparency
    style={{marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
    </Card>
    </GridItem>
    </GridContainer>
    </div>
  );
}
