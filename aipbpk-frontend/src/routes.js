/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import ModelStructure from "views/modelStructure.js";
import Code from "views/code.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import TableListParams from "views/TableListParams.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Contact from "views/Contact.js";

const defaultAdminRoute="Oral";
const defaultTargetTissue = "Blood";
const defaultDoseLevel = 20;
const defaultNPSize = 5;
const defaultZetaPotential = -20.6;
const defaultHydroDiameter = 12.2;
const defaultSurface = 27;
const defaultAdminNpsPerRat=13;

const defaultInterval = 24;
const defaultDose = 1;
const defaultDays = 1;
const defaultIterations = 100;


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: <Map />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/admin",
  // },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-align-left-2",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/parameters",
    name: "Output Table",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-paper",
    component: <TableListParams />,
    layout: "/admin",
  },
  {
    path: "/model",
    name: "Model Structure",
    rtlName: "خرائط",
    icon: "tim-icons icon-chart-bar-32",
    component: <ModelStructure />,
    layout: "/admin",
  },
  {
    path: "/code",
    name: "Code",
    rtlName: "خرائط",
    icon: "tim-icons icon-alert-circle-exc",
    component: <Code />,
    layout: "/admin",
  },
  
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-align-center",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },
  {
    path: "/contact",
    name: "Contact",
    rtlName: "اتصال",
    icon: "tim-icons icon-world",
    component: <Contact />,
    layout: "/admin",
  },
];
export default routes;
