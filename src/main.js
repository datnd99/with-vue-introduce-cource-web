import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "./scss/common.scss";

const DEFAULT_TITLE = "Phong AWS";
router.afterEach((to) => {
  Vue.nextTick(() => {
    let title = "";
    if (to.meta.title) {
      title = to.meta.title + " - " + DEFAULT_TITLE;
    } else {
      title = DEFAULT_TITLE;
    }
    document.title = title;
  });
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
