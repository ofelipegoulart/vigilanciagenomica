import React from "react";
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, Brush, ResponsiveContainer } from "recharts";

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

import { histogram } from "variables/HistogramData.js";

export default function Dashboard() {
  const classes = useStyles();
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
              <h3 className={classes.cardTitle}>
                12 <small>variantes</small>
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
              <h3 className={classes.cardTitle}>
                2 <small>amostras</small>
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
              <h3 className={classes.cardTitle}>
                120 <small>municípios</small>
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
            <h3 className={classes.cardTitleWhite}>Variantes Reportadas</h3>
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
          <ResponsiveContainer width={'95%'} aspect={2.3}>
          <ComposedChart
          width={1200}
          height={600}
          data={histogram}
          margin={{ top: 0, right: 10, bottom: 5, left: -5 }}
          >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" allowDataOverflow="true" interval="preserveStart" />
          <YAxis domain={[0, 'dataMax + 1000']} allowDataOverflow="true" />
          <Tooltip />
          <Legend wrapperStyle={{ bottom: -5}} />
          <Bar dataKey="pv" barSize={60} fill="#a8a8a8" />
          <Line type="monotone" dot={false} strokeWidth={1.4} dataKey="uv" stroke="#0D47A1" />
          </ComposedChart>
          </ResponsiveContainer>
          </div>
            <CardBody>
              <h4 className={classes.cardTitle}></h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                </span>{" "}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      </div>
    </div>
  );
}
