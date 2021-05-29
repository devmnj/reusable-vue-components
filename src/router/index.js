import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import ACards from "../views/ACards.vue";
import PCard from "../views/PCard.vue";
import Profile from "../views/Profile.vue";
import TextEffects from "../views/TextEffects.vue";
import Loaders from "../views/Loaders.vue";
import Menu from "../views/Menu.vue";
import Login from "../views/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "this.$Loading.finish()",
    component: Login
  },
  {
    path: "/loaders",
    name: "Loaders",
    component: Loaders
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/text",
    name: "TextEffects",
    component: TextEffects
  },
  {
    path:"/menus",
    name:"Menu",
    component: Menu
  },
  {
    path: "/posts",
    name: "PCard",
    component: PCard
  },
  {
    path: "/cards",
    name: ACards,
    component: ACards
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes,
 
});

export default router;
