import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { data } from "variables/PieData.js";

import styles from "assets/jss/material-dashboard-react/views/variantStyle.js";

const useStyles = makeStyles(styles);

export default function PerfilVariantes() {
  const classes = useStyles();
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
}

  return (
    <div>
    <div className={classes.chartDesktop}>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div className={classes.spacing}>&nbsp;
        </div>
        <CardHeader color="info">
          <h3 className={classes.cardTitleWhite}>PC Frequência das Variantes (total)</h3>
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
          <ResponsiveContainer>
          <PieChart
            width={250}
            height={250}
            >
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
              </Pie>
              <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
        </ResponsiveContainer>
        </div>
          </Card>
        </GridItem>
      </GridContainer>
      </div>
      </div>
      <div className={classes.chartDesktop}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.spacing}>&nbsp;
          </div>
          <CardHeader color="info">
            <h3 className={classes.cardTitleWhite}>PC Frequência das Variantes (última semana analisada)</h3>
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
            <ResponsiveContainer>
            <PieChart
              width={250}
              height={250}
              >
                <Pie
                  data={data}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
                </Pie>
                <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
          </ResponsiveContainer>
            </div>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
        </div>
        <div className={classes.chartMobile}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.spacingMobile}>&nbsp;
            </div>
            <CardHeader color="info" className={classes.cardHeaderMobile}>
              <h3 className={classes.cardTitleWhiteMobile}>Frequência das Variantes (total)</h3>
            </CardHeader>
              <CardBody className={classes.cardBodyMobile}>
              </CardBody>
          </GridItem>
        </GridContainer>
          <div className={classes.cardVariantMobile}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card chart className={classes.cardMobile}>
              <div className={classes.chartVariantMobile}>
              <PieChart
                width={300}
                height={300}
                >
                  <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                  </Pie>
                  <Legend layout="horizontal" align="horizontal" verticalAlign="bottom" />
            </PieChart>
              </div>
              </Card>
            </GridItem>
          </GridContainer>
          </div>
          </div>
          <div className={classes.chartMobile}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.spacingMobile}>&nbsp;
              </div>
              <CardHeader color="info" className={classes.cardHeaderMobile}>
                <h3 className={classes.cardTitleWhiteMobile}>Frequência das Variantes (última semana analisada)</h3>
              </CardHeader>
                <CardBody className={classes.cardBodyMobile}>
                </CardBody>
            </GridItem>
          </GridContainer>
            <div className={classes.cardVariantMobile}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card chart className={classes.cardMobile}>
                <div className={classes.chartVariantMobile}>
                <PieChart
                  width={300}
                  height={300}
                  >
                    <Pie
                      data={data}
                      cx={100}
                      cy={100}
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                    </Pie>
                    <Legend layout="horizontal" align="vertical" verticalAlign="bottom" />
              </PieChart>
                </div>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

  );
}
