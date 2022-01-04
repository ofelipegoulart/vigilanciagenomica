import { BrowserRouter, Router, Switch, Redirect } from "react-router-dom";
// core components/views for Admin layout
import Tutorial from "private/Tutorial/Tutorial.js";
import { CSVMetadados } from "private/CSVmetadados/CSVmetadados.js";
import Extração from "private/Extracao/Extracao.js";
import Sequenciamento from "private/Sequenciamento/Sequenciamento.js";
import Análise from "private/Analise/Analise.js";
import Liberação from "private/Liberacao/Liberacao.js";

const dashboardRoutes = [
  {
    path: "/tutorial",
    name: "Como usar?",
    icon: "home",
    component: Tutorial,
    layout: "/privado",
  },
  {
    path: "/submeter-CSV",
    name: "Envio de Metadados",
    icon: "upload_file",
    component: CSVMetadados,
    layout: "/privado",
  },
  {
    path: "/registro-extracao",
    name: "Extração",
    icon: "colorize",
    component: Extração,
    layout: "/privado",
  },
  {
    path: "/registro-sequenciamento",
    name: "Sequenciamento",
    icon: "biotech",
    component: Sequenciamento,
    layout: "/privado",
  },
  {
    path: "/registro-analise",
    name: "Análise",
    icon: "search",
    component: Análise,
    layout: "/privado",
  },
  {
    path: "/liberacao-resultados",
    name: "Liberação de Resultados",
    icon: "done",
    component: Liberação,
    layout: "/privado",
  },
];

export default dashboardRoutes;




/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
