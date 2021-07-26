import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/concepto",
      name: "concepto",
      component: () => import("./components/ConceptoList")
    },
    {
      path: "/concepto/:id",
      name: "concepto-details",
      component: () => import("./components/Concepto")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddConcepto")
    }
  ]
});

