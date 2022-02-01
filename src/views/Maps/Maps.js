import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  containerMap: {
    width:"95%",
    marginLeft:"auto",
    marginRight:"auto",
    },

  mapSite: {
    display:"block",
    width: "100%",
  },
  description: {
    marginLeft:"auto",
    marginRight:"auto",
    textAlign:"center",
  }
};

const useStyles = makeStyles(styles);

export default function Maps() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="info">
              <h1>Situação da Vigilância Genômica no Mapa de Santa Catarina</h1>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
<div style={{overflow: "auto",margin: "30px auto", maxWidth: "100%"}}>
<iframe scrolling="no" src="https://microreact.org/project/7gk1SiH76NmqRwQ6a992RS-projeto-covid-sc"
style={{border: "0px none",height: "812px", marginTop:"-50px", width: "880px"}}>
</iframe>
</div>
<div>
  </div>
      </GridContainer>
      <div style={{width:"100%",textAlign:"center"}}>
      <a href="https://microreact.org/project/7gk1SiH76NmqRwQ6a992RS-projeto-covid-sc" target="_blank">Link para o mapa completo</a>
      </div>
    </div>
  );
};
