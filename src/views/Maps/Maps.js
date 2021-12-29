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

  overlay: {
    marginTop:"-300px",
    marginBottom:"300px",
    width:"100%",
    height:"auto",
    opacity:"0",
    transition: ".5s ease",
    textAlign:"center",
  },
  text: {
    color:"#000",
  },
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
      <div className={classes.containerMap}>
      <a href="https://microreact.org/project/3jY1MQzTVUsBjw1z7DWBMu-genoma-covid-sc" target="_blank">
        <img src={map} className={classes.mapSite}/>
      </a>
      </div>
      </GridContainer>
    </div>
  );
};
