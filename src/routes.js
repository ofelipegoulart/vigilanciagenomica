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
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Início",
    rtlName: "لوحة القيادة",
    icon: "home",
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Painel SC",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "bar_chart",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Perfil das Variantes",
    rtlName: "قائمة الجدول",
    icon: "coronavirus",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Mapa",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Exemplo",
    rtlName: "طباعة",
    icon: BubbleChart,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Sobre o Projeto",
    rtlName: "الرموز",
    icon: LibraryBooks,
    component: Icons,
    layout: "/admin",
  },
];

export default dashboardRoutes;
