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

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h1>Tutorial da Área Restrita da Rede de Vigilância Genômica da COVID-19 em Santa Catarina.</h1>
          </CardHeader>
          <CardBody>
            <p>
Seja bem-vindo(a) ao acesso restrito da <b>Rede de Vigilância Genômica do Estado de Santa Catarina.</b><br></br>
            </p>
<p>Esta é a área interna do projeto. Aqui, serão inseridos os arquivos que alimentarão o projeto.
Na aba <b>CSV Metadados,</b> insira os arquivos .csv que contém as amostras.</p>
            <p>
Encontrando qualquer problema, por favor contate o e-mail ________@______.____<br></br>
            </p>

          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
