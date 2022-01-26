import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import map from "assets/img/map.png";

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
<div style={{border: "2px solid #D5CC5A", overflow: "hidden",margin: "15px auto", maxWidth: "575px"}}>
<iframe scrolling="no" src="https://microreact.org/project/7gk1SiH76NmqRwQ6a992RS-projeto-covid-sc"
style={{border: "0px none", marginLeft: "-36px", height: "812px", marginTop: "-486px", width: "650px"}}>
</iframe>
</div>
      </GridContainer>
    </div>
  );
};
