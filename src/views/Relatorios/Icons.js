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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est nibh, rutrum eu accumsan et, viverra vel erat. Sed ullamcorper ipsum arcu, vitae sollicitudin neque porttitor a. Cras convallis efficitur varius. Etiam sodales tincidunt commodo. Maecenas iaculis augue tortor, et rhoncus tortor eleifend vel. Suspendisse aliquam porttitor magna a eleifend. Donec interdum arcu at commodo feugiat. Cras ut magna elementum, feugiat enim vitae, molestie purus. Donec sodales at arcu et condimentum. Nullam commodo arcu vel leo varius, eu condimentum lacus vehicula.

Vivamus augue libero, vulputate vitae blandit eu, feugiat nec purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris venenatis vehicula eros vitae malesuada. Maecenas condimentum tincidunt odio, at volutpat nulla interdum et. Integer faucibus dolor dui, eu bibendum odio dignissim quis. Nam posuere dui sit amet mi scelerisque, at congue felis euismod. Nullam scelerisque ac neque non scelerisque. Nunc pellentesque, libero non laoreet blandit, turpis elit tempor purus, nec consectetur dolor diam ac lectus. Vivamus sit amet ultrices libero. Suspendisse euismod, arcu ac tempus pellentesque, mauris augue tempus justo, a aliquam sem velit quis leo. Nulla faucibus nec libero sit amet rutrum. Sed ante ligula, venenatis sit amet iaculis id, ullamcorper nec odio. Proin blandit fringilla lectus ut efficitur.

Curabitur vulputate, lorem sed condimentum placerat, lorem eros dapibus sem, ut vestibulum ante lorem et magna. Sed venenatis pharetra vestibulum. Aenean semper gravida nibh, eget blandit nunc dapibus nec. Praesent et risus imperdiet, lobortis leo sed, viverra sem. Nullam eget porttitor diam, in blandit elit. Nam eu orci non erat sollicitudin euismod ut eget nunc. Sed finibus sed nisi a sollicitudin. Sed quis enim et elit pretium pharetra at vel orci. Vestibulum sed lacinia lectus. In turpis metus, scelerisque a mauris ultrices, tristique volutpat diam. Maecenas pretium ante et odio facilisis, ut ornare leo varius. Praesent leo magna, faucibus nec euismod nec, condimentum sed orci.

Cras vel libero non erat blandit dictum vitae non diam. Cras ac suscipit ex. Nam quis tincidunt sem, ac faucibus erat. Nullam iaculis feugiat auctor. Aliquam faucibus accumsan enim sit amet pellentesque. Duis aliquam pellentesque dui sed tincidunt. Maecenas eget felis sit amet mauris vulputate consectetur in a nunc. Sed fermentum egestas mi. Nullam malesuada justo a convallis pharetra.

Mauris at rutrum ante. Mauris vel magna venenatis est congue lacinia. Fusce pharetra fermentum sapien, vel cursus augue imperdiet non. Morbi a magna magna. Suspendisse tincidunt erat ante, sed molestie nisi feugiat non. Aliquam quis lacus eget velit tincidunt pellentesque ultrices ac augue. Sed quis dapibus urna, quis elementum dolor. Donec vulputate ipsum id cursus sagittis. Mauris ac molestie metus, ut dictum diam. Maecenas sed euismod ante. Integer ac consectetur ex, id viverra augue. Pellentesque vitae lorem facilisis, gravida ante ut, semper leo. Donec fermentum placerat lorem vitae aliquet. Aliquam erat volutpat. </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
