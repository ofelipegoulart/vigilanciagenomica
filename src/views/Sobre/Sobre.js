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
          <CardHeader plain color="primary">
            <h1>Sobre o Projeto</h1>
          </CardHeader>
          <CardBody>
            <p>

A Rede de Vigilância Genômica é um projeto que visa sequenciar e caracterizar as variantes do SARS-CoV-2 circulantes quanto as características genéticas,
dispersão e relação aos genótipos, fatores de risco ou programático ou de prognóstico, e de prevalência das VOC (Variantes de Preocupação) e das VOI
(Variantes de Interesse), e associadas a eventos considerados inusitados ou sentinelas, como reinfecções, casos graves ou óbitos em pacientes sem comorbidades,
óbitos em gestantes, suspeitas de falhas vacinais (casos graves e óbitos), casos em pacientes com histórico de viagem para locais com circulação de nova VOI ou
VOCs e seus contatos e casos relacionados a surtos. </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
