
import Calendar from "views/Calendar/Calendar.js";

import Dashboard from "views/Dashboard/Dashboard.js";
import LoginPage from "views/Pages/LoginPage.js";

import RegisterPage from "views/Pages/RegisterPage.js";

import UserProfile from "views/Pages/UserProfile.js";
import Reports from "views/Reports1/Reports";

import TableList from "views/Table/TableList.js";


// @material-ui/icons

import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";

import Timeline from "@material-ui/icons/Timeline";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [



      {
        path: "/login-page",
        name: "Login Page",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: LoginPage,
        layout: "/auth",
      },
      {
        path: "/register-page",
        name: "Register Page",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: RegisterPage,
        layout: "/auth",
      },

      {
        path: "/user-page",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "UP",
        rtlMini: "شع",
        component: UserProfile,
        layout: "/admin",
      },


    ],
  },

  {
    path: "/Table",
    name: "Medical Reps",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/Reports1",
    name: "Reports",
    rtlName: "plan",
    icon: Timeline,
    component: Reports,
    layout: "/admin",
  },



  {
    path: "/calendar",
    name: "Doctors & Contacts",
    rtlName: "التقويم",
    icon: DateRange,
    component: Calendar,
    layout: "/admin",
  },

];
export default dashRoutes;
