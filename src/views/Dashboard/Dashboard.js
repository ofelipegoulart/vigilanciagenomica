import React from "react";
import { ComposedChart, Area, AreaChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, Brush, ResponsiveContainer } from "recharts";

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
import { areaChart } from "variables/AreaChart.js";

const toPercent = (decimal: number, fixed: number = 0) =>
  `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o: any) => {
  const { payload = [], label } = o;
  const total = payload.reduce(
    (result: number, entry: any) => result + entry.value,
    0
  );

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
                1 <small>variante</small>
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
                403 <small>amostras</small>
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
                74 <small>municípios</small>
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
          <div className={classes.areaVariant}>
          <ResponsiveContainer width={'90%'} aspect={1.9}>
          <AreaChart
      width={500}
      height={400}
      data={areaChart}
      stackOffset="expand"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis tickFormatter={toPercent} />
      <Tooltip content={renderTooltipContent} />
      <Area
        type="monotone"
        dataKey="a"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="b"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="c"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
    </ResponsiveContainer>
          </div>
            <div className={classes.spacing}>&nbsp;
            </div>
          </Card>
        </GridItem>
      </GridContainer>
      </div>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.spacing}>&nbsp;
          </div>
          <CardHeader color="info">
            <h3 className={classes.cardTitleWhite}>Volume de Sequenciamento por Mês</h3>
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
          </ComposedChart>
          </ResponsiveContainer>
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
