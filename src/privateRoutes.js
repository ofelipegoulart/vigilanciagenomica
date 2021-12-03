import { BrowserRouter, Router, Switch, Redirect } from "react-router-dom";
// core components/views for Admin layout
import Tutorial from "PrivateViews/Tutorial/Tutorial.js";
import CSVMetadados from "PrivateViews/CSVmetadados/CSVmetadados.js";
import Extração from "PrivateViews/Extracao/Extracao.js";
import Sequenciamento from "PrivateViews/Sequenciamento/Sequenciamento.js";
import Análise from "PrivateViews/Analise/Analise.js";
import Liberação from "PrivateViews/Liberacao/Liberacao.js";

const dashboardRoutes = [
  {
    path: "/tutorial",
    name: "Como usar?",
    icon: "home",
    component: Tutorial,
    layout: "/user",
  },
  {
    path: "/submeter-CSV",
    name: "CSV Metadados",
    icon: "upload_file",
    component: CSVMetadados,
    layout: "/user",
  },
  {
    path: "/registro-extracao",
    name: "Extração",
    icon: "colorize",
    component: Extração,
    layout: "/user",
  },
  {
    path: "/registro-sequenciamento",
    name: "Sequenciamento",
    icon: "biotech",
    component: Sequenciamento,
    layout: "/user",
  },
  {
    path: "/registro-analise",
    name: "Análise",
    icon: "search",
    component: Análise,
    layout: "/user",
  },
  {
    path: "/liberacao-resultados",
    name: "Liberação de Resultados",
    icon: "done",
    component: Liberação,
    layout: "/user",
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
