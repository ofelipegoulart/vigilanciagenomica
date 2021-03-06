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
import genolab from "assets/img/logos/genolablogo.png";
import vigilanciasaude from "assets/img/logos/vigilanciasaudelogo.png";
import fiocruz from "assets/img/logos/fiocruzlogo.jpg";

import styles from "assets/jss/material-dashboard-react/views/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function Sobre() {
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
          <h3 className={classes.cardTitleWhite}>Suporte Financeiro</h3>
        </CardHeader>
        </GridItem>
        </GridContainer>
        <div className={classes.cardLogos}>
        <GridContainer>
        <Card chart>
        <GridItem xs={10} sm={12} md={12} style={{textAlign:"center", height:"200px",marginTop:"90px", marginBottom:"30px"}}>
        <img src={ses} style={{height:"160px"}}/>
        <img src={fapesc} style={{marginLeft:"30px", height:"180px"}} />
        <img src={capes} style={{marginLeft:"30px", height:"180px"}}/>
        </GridItem>
        </Card>
        </GridContainer>
        </div>
        <div style={{marginTop:"30px"}}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>Participantes da Rede</h3>
            </CardHeader>
            </GridItem>
            </GridContainer>
            <GridContainer>
            <Card chart style={{marginTop:"-35px"}}>
        <GridItem xs={10} sm={12} md={12} style={{textAlign:"center", marginTop:"60px", height:"200px"}}>
        <img src={ufsc} style={{paddingRight:"30px", height:"200px"}}/>
        <img src={bioinfo} style={{paddingRight:"30px",height:"200px"}} />
        <img src={dive} style={{paddingLeft:"30px", height:"185px"}}/>
        <img src={lacen} style={{paddingLeft:"30px",height:"200px"}}/>
        </GridItem>
        <GridItem xs={10} sm={12} md={12} style={{textAlign:"center", marginTop:"60px", height:"230px", marginBottom:"30px"}}>
        <img src={biomehub} style={{ height:"200px"}}/>
        <img src={ifsc} style={{height:"200px"}}/>
        <img src={nubioinfo} style={{ height:"190px"}}/>
        <img src={lbmms} style={{height:"210px"}}/>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} style={{textAlign:"center", marginTop:"60px", height:"230px", marginBottom:"30px"}}>
        <img src={lva} style={{height:"190px"}}/>
        <img src={vigilanciasaude} style={{paddingLeft:"30px", marginBottom:"30px",marginTop:"30px",height:"140px"}}/>
        </GridItem>
        </Card>
        </GridContainer>
        </div>
        </div>
  );
}
