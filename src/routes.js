import { BrowserRouter, Router, Switch, Redirect } from "react-router-dom";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import Dashboard from "views/Dashboard/Dashboard.js";
import PerfilVariantes from "views/PerfilVariantes/PerfilVariantes.js";
import PainelSC from "views/PainelSC/PainelSC.js";
import Relatorios from "views/Relatorios/relatorios.js";
import Sobre from "views/Sobre/Sobre.js";
import Maps from "views/Maps/Maps.js";


const dashboardRoutes = [
  {
    path: "/inicio",
    name: "Início",
    icon: "home",
    component: Dashboard,
    layout: "/dashboard",
  },
  {
    path: "/painelSC",
    name: "Painel SC",
    icon: "bar_chart",
    component: PainelSC,
    layout: "/dashboard",
  },
  // {
  //   path: "/perfil-variantes",
  //   name: "Perfil das Variantes",
  //   icon: "coronavirus",
  //   component: PerfilVariantes,
  //   layout: "/dashboard",
  // },
  {
    path: "/mapa",
    name: "Mapa",
    icon: "public",
    component: Maps,
    layout: "/dashboard",
  },
  {
    path: "/relatorios",
    name: "Relatórios",
    icon: "description",
    component: Relatorios,
    layout: "/dashboard",
  },
  {
    path: "/sobre",
    name: "Sobre o Projeto",
    icon: "info",
    component: Sobre,
    layout: "/dashboard",
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
