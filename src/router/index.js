import { createRouter, createWebHashHistory } from "vue-router";
import PickBirth from "../views/forms/PickBirth.vue";
import PickInfo from "../views/forms/PickInfo.vue";
import PickPhone from "../views/forms/PickPhone.vue";
import Graph from "../views/Graph.vue";
import Home from "../views/Home.vue";
import Inquary from "../views/Inquary.vue";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";
import Me from "../views/Me.vue";
import Query from "../views/Query.vue";
import Register from "../views/Register.vue";
const routes = [
    { 
      path: "/", 
      redirect: "/home",
      component: Main,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/inquary",
          name: "inquary",
          component: Inquary
        },
        {
          path: "/graph",
          name: "graph",
          component: Graph
        },
        {
          path: "/me",
          name: "me",
          component: Me
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/query",
      name: "query",
      component: Query
    },
    {
      path: "/me/pick_birth",
      component: PickBirth
    },
    {
      path: "/me/pick_phone",
      component: PickPhone
    },
    {
      path: "/me/pick_info",
      component: PickInfo
    }

  ]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })