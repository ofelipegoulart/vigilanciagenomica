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
import SE41 from "reports/2021_SE41_Report_Semanal_assinado.pdf";
import SE45 from "reports/2021_SE45_Report_Semanal_Completo_assinado.pdf";
import SE46 from "reports/2021_SE46_Report_Semanal_Completo_assinado.pdf";
import SE47 from "reports/2021_SE47_Report_Semanal_assinado.pdf";
import SE48 from "reports/2021_SE48_Report_Semanal_assinado.pdf";
import SE49 from "reports/2021_SE49_Report_Semanal_assinado.pdf";
import SE50 from "reports/2021_SE50_Report_Semanal_assinado.pdf";
import SE51 from "reports/2021_SE50_Report_Semanal_assinado.pdf";
import SE52 from "reports/2021_SE52_Report_Semanal_assinado.pdf";

import Table from "components/Table/Table.js";
import styles from "assets/jss/material-dashboard-react/views/aboutStyle.js";

var relatorio = getIframeURL(28);

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
const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card chart>
          <CardHeader color="info">
            <h1>Relatórios Técnicos</h1>
          </CardHeader>
          <CardBody style={{marginTop:"30px"}}>
            <iframe
            src={relatorio}
            frameborder="0"
            width="100%"
            height="500"
            allowtransparency
            style={{alignItems:"center"}}
            >
          </iframe>

            </CardBody>
            </Card>
            </GridItem></GridContainer>

            </div>
  );
}
