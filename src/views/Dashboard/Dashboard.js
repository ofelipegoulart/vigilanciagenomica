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
const jwt = require("jsonwebtoken");

const METABASE_SITE_URL = "http://covidsc-api.sites.ufsc.br";
const METABASE_SECRET_KEY = "5b51c410ec9e620a28e9cc18d855f9f021e88c83a07773b327262dda5e007b36";

const payload = {
  resource: { question: 13 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
const token = jwt.sign(payload, METABASE_SECRET_KEY);

const iframeUrl = METABASE_SITE_URL + "/embed/question/" + token + "#bordered=false&titled=false";


export default function Dashboard() {
  const classes = useStyles();
  function getIframe() {
    console.log(iframeUrl);
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>search</Icon>
              </CardIcon>
              <iframe
                src="http://covidsc-api.sites.ufsc.br/public/question/855a77e1-52f1-4cc6-8d29-53559c8a3c0d"
                frameborder="0"
                style={{marginTop:"5px"}}
                width="250"
                height="200"
                allowtransparency
            ></iframe>
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
              <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/0c2302b9-2c34-4c17-9d88-5bdb33155e33"
    frameborder="0"
    style={{marginTop:"5px"}}
    width="250"
    height="200"
    allowtransparency
></iframe>
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
              <iframe
    src="http://covidsc-api.sites.ufsc.br/public/question/4a3c2b1b-232a-410a-ada0-51efc3687473"
    frameborder="0"
    style={{marginTop:"5px"}}
    width="250"
    height="200"
    allowtransparency
></iframe>
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
            <h3 className={classes.cardTitleWhite}>Distribuição de Variantes pelo Estado</h3>
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
        <h3 className={classes.cardTitleWhite}>Total</h3>
      </CardHeader>
      <Card chart className={classes.pieChartVariant}>
            <iframe
      src="http://covidsc-api.sites.ufsc.br/public/question/7091bf37-9cde-4d02-ac1d-66c87268cc39"
      frameborder="0"
      width="100%"
      height="450"
      allowtransparency
      style={{marginTop:"10px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}
      >
  </iframe>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
      <CardHeader color="info">
        <h3 className={classes.cardTitleWhite}>Últimos 30 dias</h3>
      </CardHeader>
      <Card chart className={classes.pieChartVariant}>
          <iframe
    src="https://covidsc-api.sites.ufsc.br/public/question/ddf983ff-3c20-4b32-8f6d-46f7f0e9cdd7"
    frameborder="0"
    width="100%"
    height="450"
    allowtransparency
    style={{marginTop:"10px",marginLeft:"auto",marginRight:"auto",scroll:"hidden"}}
    >
    </iframe>
        </Card>
      </GridItem>
      </GridContainer>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.spacing}>&nbsp;</div>
          <CardHeader color="info">
            <h3 className={classes.cardTitleWhite}>Volume de Amostras Processadas por Mês</h3>
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
    src="http://covidsc-api.sites.ufsc.br/public/question/04bd787f-b310-4038-80e4-4e1c2882b1c1"
    frameborder="0"
    width="100%"
    height="600"
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
