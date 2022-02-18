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
var dashboard_iframe = "";


function getIframeURL(dashboard_id) {
  var jwt = require("jsonwebtoken");
  var METABASE_SITE_URL = "http://covidsc-api.sites.ufsc.br";
  var METABASE_SECRET_KEY = "5b51c410ec9e620a28e9cc18d855f9f021e88c83a07773b327262dda5e007b36";
  var payload = {
    resource: { dashboard: dashboard_id },
    params: {},
    // exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
    exp: Math.round(Date.now() / 1000) + (100) // 10 minute expiration
  };
  var token = jwt.sign(payload, METABASE_SECRET_KEY);
  var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#bordered=false&titled=false";
  return iframeUrl;
}

function loadIframes() {
  dashboard_iframe = getIframeURL(4);
}

loadIframes();

export default function PainelSC() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Card chart>
          <CardHeader color="info">
            <h1>Dashboard COVID SC</h1>
          </CardHeader>
            <iframe
              src={dashboard_iframe}
              frameborder="0"
              width="95%"
              height="1400px"
              allowtransparency
              style={{ marginTop: "60px", marginLeft: "auto", marginRight: "auto" }}></iframe>
          </Card>
        </GridItem>
      </GridContainer>

    </div>
  );
}
