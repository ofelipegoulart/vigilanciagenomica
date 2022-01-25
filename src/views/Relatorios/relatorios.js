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
import styles from "assets/jss/material-dashboard-react/views/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="info">
            <h1>Relatórios Técnicos</h1>
          </CardHeader>
          <CardBody>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE41}> Semana Epidemiológica 41 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE41}> Semana Epidemiológica 42 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE41}> Semana Epidemiológica 43 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE41}> Semana Epidemiológica 44 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE45}> Semana Epidemiológica 45 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE46}> Semana Epidemiológica 46 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE47}> Semana Epidemiológica 47 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE48}> Semana Epidemiológica 48 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE49}> Semana Epidemiológica 49 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE50}> Semana Epidemiológica 50 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE51}> Semana Epidemiológica 51 [em PDF] </a> </p>
            <p> <b>Relatório Técnico Semanal:</b> <a href={SE52}> Semana Epidemiológica 21 [em PDF] </a> </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
