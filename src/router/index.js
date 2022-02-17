import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/personal-account",
    name: "personalAccount",
    component: () =>
      import(
        /* webpackChunkName: "personalAccount" */ "../views/personal-account-page/personal-account-page"
      ),
  },
  {
    path: "/wishlist",
    name: "wishLIstPage",
    component: () =>
      import(
        /* webpackChunkName: "wishLIstPage" */ "../views/liked-page/liked-page"
      ),
  },
  {
    path: "/balance",
    name: "balancePage",
    component: () =>
      import(
        /* webpackChunkName: "balancePage" */ "../views/statistcs-page/statistics-page"
      ),
  },
  {
    path: "/add-to-cart",
    name: "addToCartPage",
    component: () =>
      import(
        /* webpackChunkName: "addToCartPage" */ "../views/add-to-cart-page/add-to-cart-page"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
