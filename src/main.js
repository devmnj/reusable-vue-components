import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import gitfooter from "@/components/site_components/Gitfooter";
//icons
Vue.component("git-footer", gitfooter);
Vue.config.productionTip = false;
Vue.use(Buefy);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
