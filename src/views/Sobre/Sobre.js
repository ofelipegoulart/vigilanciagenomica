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
import CardAvatar from "components/Card/CardAvatar.js";
import Table from "components/Table/Table.js";

import { pesquisadores } from "variables/Tables/SobreProjeto.js";

import bioinfo from "assets/img/logos/bioinfo.png";
import ufsc from "assets/img/logos/UFSClogo.png";
import ses from "assets/img/logos/seslogo.png";
import dive from "assets/img/logos/divelogo.png";
import lacen from "assets/img/logos/lacen.png";
import ifsc from "assets/img/logos/ifsclogo.png";
import fapesc from "assets/img/logos/fapesclogo.png";
import lva from "assets/img/logos/lvalogo.png";
import lbmms from "assets/img/logos/lbmmslogo.png";
import nubioinfo from "assets/img/logos/nubioinfologo.png";
import capes from "assets/img/logos/capeslogo.png";


import biomehub from "assets/img/logos/biomehublogo.png";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="info">
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
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <CardHeader color="info">
          <h3 className={classes.cardTitleWhite}>Participantes da Rede</h3>
        </CardHeader>
        </GridItem>
        </GridContainer>
        <div className={classes.cardLogos}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
            <div className={classes.row1}>
            <img src={ses} className={classes.sesLogo}/>
            <img src={fapesc} className={classes.fapescLogo}/>
            <img src={ufsc} className={classes.ufscLogo}/>
            </div>
            <div className={classes.row2}>
            <img src={nubioinfo} className={classes.nubioinfoLogo}/>
            <img src={bioinfo} className={classes.bioinfoLogo}/>
            <img src={lbmms} className={classes.lbmmsLogo}/>
            <img src={lva} className={classes.lvaLogo}/>
            </div>
            <div className={classes.row3}>
            <img src={dive} className={classes.diveLogo}/>
            <img src={lacen} className={classes.lacenLogo}/>
            <img src={biomehub} className={classes.biomehubLogo}/>
            <img src={ifsc} className={classes.ifscLogo}/>
            <img src={capes} className={classes.capesLogo}/>
            </div>
            </Card>
            </GridItem>
            </GridContainer>
            <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>
                Equipe do Projeto
              </h3>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Nome", "Instituição"]}
                tableData={pesquisadores}
              />
            </CardBody>
            </Card>
            </div>
    </div>
  );
}
