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
import { Table } from '@material-ui/core';
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
          <CardBody style={{marginTop:"30px",marginLeft:"auto",marginRight:"auto"}}>
          <table>
            <tr>
              <th>Ano</th>
              <th>Mês</th>
              <th>Semana Epidemiológica</th>
              <th>Link</th>
            </tr>
            <tr>
              <td>2021</td>
              <td>Dezembro</td>
              <td>52</td>
              <td><a href={SE52} target="_blank"> Semana Epidemiológica 52 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Dezembro</td>
              <td>51</td>
              <td><a href="#" target="_blank"> Semana Epidemiológica 51 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Dezembro</td>
              <td>50</td>
              <td><a href={SE50} target="_blank"> Semana Epidemiológica 50 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Dezembro</td>
              <td>49</td>
              <td><a href={SE49} target="_blank"> Semana Epidemiológica 49 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Novembro</td>
              <td>48</td>
              <td><a href={SE48} target="_blank"> Semana Epidemiológica 48 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Novembro</td>
              <td>47</td>
              <td><a href={SE47} target="_blank"> Semana Epidemiológica 47 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Novembro</td>
              <td>46</td>
              <td><a href={SE46} target="_blank"> Semana Epidemiológica 46 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Novembro</td>
              <td>45</td>
              <td><a href={SE45} target="_blank"> Semana Epidemiológica 45 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Outubro</td>
              <td>44</td>
              <td><a href="#" target="_blank"> Semana Epidemiológica 44 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Outubro</td>
              <td>43</td>
              <td><a href="#" target="_blank"> Semana Epidemiológica 43 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Outubro</td>
              <td>42</td>
              <td><a href="#" target="_blank"> Semana Epidemiológica 42 [em PDF] </a></td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Outubro</td>
              <td>41</td>
              <td><a href={SE41} target="_blank"> Semana Epidemiológica 41 [em PDF] </a></td>
            </tr>
          </table>
        </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
