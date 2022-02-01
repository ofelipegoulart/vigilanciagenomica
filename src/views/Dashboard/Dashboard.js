import React from "react";
import {  Area, AreaChart, Bar, Brush, CartesianGrid, Cell, ComposedChart, Legend, PieChart, Pie, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

export default function Dashboard() {
  const classes = useStyles();
  function getIframe() {
    console.log(iframeUrl);
  }

  const mapa = new Map();
    var total_municipios_analisados = "0";
    var total_amostras_analisadas = "0";
    var total_variantes_identificadas = "0";

    function loadTotals() {
        const url = 'http://covidsc-api.sites.ufsc.br/public/question/d3cd437c-1e58-4259-bae7-8399f439ce3a.json';
        fetch(url)
           .then(function(response){
                response.json().then(data => {
                    for(var i in data) {
                        mapa.set(data[i].descricao, data[i].total);
                    }
                    console.log(mapa);
                    console.log('Total de municípios = ' + mapa.get('total_municipios_analisados'));
                    console.log('Total de amostras = ' + mapa.get('total_amostras_analisadas'));
                    console.log('Total de variantes = ' + mapa.get('total_variantes_identificadas'));
                    total_municipios_analisados = mapa.get('total_municipios_analisados').toString();
                    total_amostras_analisadas = mapa.get('total_amostras_analisadas').toString();
                    total_variantes_identificadas = mapa.get('total_variantes_identificadas').toString();
                    document.getElementById('total_variantes_identificadas').innerHTML = total_variantes_identificadas;
                    document.getElementById('total_amostras_analisadas').innerHTML = total_amostras_analisadas;
                    document.getElementById('total_municipios_analisados').innerHTML = total_municipios_analisados;
                    var jwt = require("jsonwebtoken");

    var METABASE_SITE_URL = "http://covidsc-api.sites.ufsc.br";
    var METABASE_SECRET_KEY = "5b51c410ec9e620a28e9cc18d855f9f021e88c83a07773b327262dda5e007b36";

var payload = {
  resource: { question: 3 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/question/" + token + "#bordered=false&titled=false";
console.log(iframeUrl);
                 });
            }).catch(function(err) {
                console.error('Erro ao carregar totais', err);
            });

    }
        loadTotals();

  return (
    <div>
    <GridContainer>
    <GridItem xs={12} sm={6} md={4}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Icon>search</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>Número de Variantes Identificadas&nbsp;</p>
          <h3 className={classes.cardTitle} id="total_variantes_identificadas">
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.spacing}>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={4}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Icon>check_circle_outline</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>Número de Amostras Analisadas</p>
          <h3 className={classes.cardTitle} id="total_amostras_analisadas">
          <small>amostras</small>
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.spacing}>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={4}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Icon>location_on</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>Número de Municípios Analisados</p>
          <h3 className={classes.cardTitle} id="total_municipios_analisados">
          <small>municípios</small>
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.spacing}>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.spacing}>&nbsp;
          </div>
          <CardHeader color="info">
            <h3 className={classes.cardTitleWhite}>Distribuição de Variantes em Santa Catarina</h3>
          </CardHeader>
            <CardBody>
            </CardBody>
        </GridItem>
      </GridContainer>
      <div className={classes.cardVariant}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <iframe
      src="http://covidsc-api.sites.ufsc.br/public/question/56d35422-31b7-4661-8ce6-63694f52c804"
      frameborder="0"
      width="100%"
      height="600"
      allowtransparency
      style={{marginTop:"40px",marginLeft:"auto",marginRight:"auto"}}
  ></iframe>
          </Card>
        </GridItem>
      </GridContainer>
      </div>

      <div className={classes.spacing}>&nbsp;</div>
      <div>
      <CardHeader color="info">
        <h3 className={classes.cardTitleWhite}>Total de Variantes pelo Estado</h3>
      </CardHeader>
      <div className={classes.spacing} style={{marginBottom:"10px"}}>&nbsp;</div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
      <CardHeader color="info">
        <h4 className={classes.cardTitleWhite}>Total</h4>
      </CardHeader>
      <Card chart className={classes.pieChartVariant}>
            <iframe
      src="http://covidsc-api.sites.ufsc.br/public/question/f37ee0e3-2af6-4f73-9692-ce36866d6ca3"
      frameborder="0"
      width="90%"
      height="450"
      allowtransparency
      style={{marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}
      >
  </iframe>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
      <CardHeader color="info">
        <h4 className={classes.cardTitleWhite}>Última Semana Epidemiológica Analisada</h4>
      </CardHeader>
      <Card chart className={classes.pieChartVariant}>
          <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/5c61a755-f388-4b0f-9a09-32b805272819"
    frameborder="0"
    width="90%"
    height="450"
    allowtransparency
    style={{marginTop:"12px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}
    ></iframe>
        </Card>
      </GridItem>
      </GridContainer>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.spacing}>&nbsp;</div>
          <CardHeader color="info">
            <h3 className={classes.cardTitleWhite}>Volume de Amostras Processadas por Semana Epidemiológica</h3>
          </CardHeader>
            <CardBody>
            </CardBody>
        </GridItem>
      </GridContainer>
      <div className={classes.cardVariant}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
          <div className={classes.chartVariant}>
          <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/31dd931d-4866-4255-8d5b-28f1619cedcb"
    frameborder="0"
    style={{marginLeft:"100px"}}
    width="80%"
    height="400"

    allowtransparency
    >
    </iframe>
          </div>
          <div className={classes.spacing}>&nbsp;
          </div>
          </Card>
        </GridItem>
      </GridContainer>
      </div>
      </div>
  );
}
