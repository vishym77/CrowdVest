import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import UserPage from "views/User.jsx";
import SignUp from "views/SignUp";
import SignInPage from "views/SignIn";
import SignUpPage from "views/SignUp";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: "nc-icon nc-bank",
    component: SignUpPage,
  },
  {
    path: "/signin",
    name: "Sign In",
    icon: "nc-icon nc-bank",
    component: SignInPage,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
];
export default routes;
