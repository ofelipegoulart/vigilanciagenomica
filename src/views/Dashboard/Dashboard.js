import React from "react";
// react plugin for creating charts
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  Brush,
  ResponsiveContainer
} from "recharts";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590
    },
    {
      name: "Page C",
      uv: 991,
      pv: 1098,
      amt: 989,
      cnt: 350
    },
    {
      name: "Page D",
      uv: 907,
      pv: 1200,
      amt: 1228,
      cnt: 480
    },
    {
      name: "Page E",
      uv: 881,
      pv: 1108,
      amt: 1100,
      cnt: 460
    },
    {
      name: "Page F",
      uv: 580,
      pv: 680,
      amt: 1700,
      cnt: 380
    },
    {
      name: "Page G",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490
    },
    {
      name: "Page H",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590
    },
    {
      name: "Page I",
      uv: 991,
      pv: 1098,
      amt: 989,
      cnt: 350
    },
    {
      name: "Page J",
      uv: 907,
      pv: 1200,
      amt: 1228,
      cnt: 480
    },
    {
      name: "Page K",
      uv: 881,
      pv: 1108,
      amt: 1100,
      cnt: 460
    },
    {
      name: "Page L",
      uv: 580,
      pv: 680,
      amt: 1700,
      cnt: 380
    },
    {
      name: "Page M",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490
    },
    {
      name: "Page N",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590
    },
    {
      name: "Page O",
      uv: 991,
      pv: 1098,
      amt: 989,
      cnt: 350
    },
    {
      name: "Page P",
      uv: 907,
      pv: 1200,
      amt: 1228,
      cnt: 480
    },
    {
      name: "Page Q",
      uv: 881,
      pv: 1108,
      amt: 1100,
      cnt: 460
    },
    {
      name: "Page R",
      uv: 580,
      pv: 680,
      amt: 1700,
      cnt: 380
    },
    {
      name: "Page S",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490
    },
    {
      name: "Page T",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590
    },
    {
      name: "Page U",
      uv: 991,
      pv: 1098,
      amt: 989,
      cnt: 350
    },
    {
      name: "Page V",
      uv: 907,
      pv: 1200,
      amt: 1228,
      cnt: 480
    },
    {
      name: "Page W",
      uv: 881,
      pv: 1108,
      amt: 1100,
      cnt: 460
    },
    {
      name: "Page X",
      uv: 580,
      pv: 680,
      amt: 1700,
      cnt: 380
    },
    {
      name: "Page Y",
      uv: 907,
      pv: 1200,
      amt: 1228,
      cnt: 480
    },
    {
      name: "Page Z",
      uv: 881,
      pv: 1108,
      amt: 1100,
      cnt: 460
    },
  ];
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>search</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Número de Pares Sequenciados&nbsp;</p>
              <h3 className={classes.cardTitle}>
                30 <small>pares</small>
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
              <p className={classes.cardCategory}>Número de Amostras Identificadas</p>
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
          data={data}
          margin={{ top: 0, right: 10, bottom: 5, left: -5 }}
          >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" allowDataOverflow="true" />
          <YAxis allowDataOverflow="true" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={30} fill="#a8a8a8" />
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
