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
var amostras_sexo = "";
var sequencia_faixa_etaria = "";
var variante_por_semana = "";
var sequencias_regional_saude = "";
var municipios_analisados = "";

function getIframeURL(question_id) {
       var jwt = require("jsonwebtoken");
       var METABASE_SITE_URL = "http://covidsc-api.sites.ufsc.br";
       var METABASE_SECRET_KEY = "5b51c410ec9e620a28e9cc18d855f9f021e88c83a07773b327262dda5e007b36";
       var payload = {
           resource: { question: question_id },
           params: {},
           // exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
           exp: Math.round(Date.now() / 1000) + (100) // 10 minute expiration
       };
       var token = jwt.sign(payload, METABASE_SECRET_KEY);
       var iframeUrl = METABASE_SITE_URL + "/embed/question/" + token + "#bordered=false&titled=false";
       return iframeUrl;
 }

 function loadIframes() {
   amostras_sexo = getIframeURL(23);
   sequencia_faixa_etaria = getIframeURL(24);
   variante_por_semana = getIframeURL(17);
   sequencias_regional_saude = getIframeURL(25);
   municipios_analisados = getIframeURL(26);
    }

    loadIframes();

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
    src={amostras_sexo}
    frameborder="0"
    width="90%"
    height="450"
    allowtransparency
    style={{marginTop:"30px",marginBottom:"30px", marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}
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
    src={sequencia_faixa_etaria}
    frameborder="0"
    width="90%"
    height="450"
    allowtransparency
    style={{marginTop:"60px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
    </Card>
    </GridItem>
    </GridContainer>
    <div className={classes.spacing} style={{marginBottom:"10px"}}>&nbsp;</div>
    <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
    <CardHeader color="info">
      <h3 className={classes.cardTitleWhite}>Variantes por Semana Epidemiológica (Total)</h3>
    </CardHeader>
    <Card chart style={{marginTop:"-40px"}}>
          <iframe
    src={variante_por_semana}
    frameborder="0"
    width="90%"
    height="450"
    allowtransparency
    style={{marginTop:"60px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
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
    src={sequencias_regional_saude}
    frameborder="0"
    width="90%"
    height="550"
    allowtransparency
    style={{marginTop:"60px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
    </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={4}>
    <CardHeader color="info">
      <h4 className={classes.cardTitleWhite}>Municípios Analisados</h4>
    </CardHeader>
    <Card chart className={classes.pieChartVariant}>
          <iframe
    src={municipios_analisados}
    frameborder="0"
    width="90%"
    height="550"
    allowtransparency
    style={{marginTop:"45px",marginBottom:"25px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}></iframe>
    </Card>
    </GridItem>
    </GridContainer>
    </div>
  );
}
