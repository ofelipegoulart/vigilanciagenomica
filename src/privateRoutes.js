import { BrowserRouter, Router, Switch, Redirect } from "react-router-dom";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import Dashboard from "PrivateViews/Dashboard/Dashboard.js";
import UserProfile from "PrivateViews/UserProfile/UserProfile.js";
import TableList from "PrivateViews/TableList/TableList.js";
import Typography from "PrivateViews/Typography/Typography.js";
import Tutorial from "PrivateViews/Tutorial/Tutorial.js";
import Maps from "PrivateViews/Maps/Maps.js";


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
    component: Dashboard,
    layout: "/user",
  },
  {
    path: "/registro-extracao",
    name: "Extração",
    icon: "colorize",
    component: UserProfile,
    layout: "/user",
  },
  {
    path: "/registro-sequenciamento",
    name: "Sequenciamento",
    icon: "biotech",
    component: TableList,
    layout: "/user",
  },
  {
    path: "/registro-analise",
    name: "Análise",
    icon: "search",
    component: Maps,
    layout: "/user",
  },
  {
    path: "/liberacao-resultados",
    name: "Liberação de Resultados",
    icon: "done",
    component: Typography,
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
