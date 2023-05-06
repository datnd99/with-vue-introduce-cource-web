import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import SaaView from "@/views/SolutionsArchitectAssociate";
import DaView from "@/views/DeveloperAssociate";
import SoaView from "@/views/SysOpsAdministratorAssociate.vue";
import goTo from "vuetify/lib/services/goto";
import MentorDetails from "@/views/MentorDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "",
      desc: "",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/luyen-thi-aws-certified-solutions-architect-associate",
    name: "saa",
    component: SaaView,
    meta: {
      title:
        "Luyện thi AWS Certified Solutions Architect - Associate (SAA-C03)",
      desc: "",
    },
  },
  {
    path: "/luyen-thi-aws-certified-developer-associate",
    name: "da",
    component: DaView,
    meta: {
      title: "Luyện thi AWS Certified Developer - Associate (DVA-C02)",
      desc: "",
    },
  },
  {
    path: "/luyen-thi-aws-certified-sysops-associate",
    name: "soa",
    component: SoaView,
    meta: {
      title:
        "Luyện thi AWS Certified SysOps Administrator - Associate (SOA-C02)",
      desc: "",
    },
  },
  {
    path: "/mentors/:id",
    name: "mentor_detail",
    component: MentorDetails,
    meta: {
      title:
        "Thông chi tiết của mentor",
      desc: "",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes,
});

export default router;
