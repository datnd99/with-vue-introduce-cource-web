<template>
  <v-app>
    <v-app-bar app :flat="isFlat" :color="bgColor">
      <app-navigation></app-navigation>
    </v-app-bar>

    <v-main :class="{ 'pt-0': currentRouteName == 'home' }">
      <router-view />
    </v-main>

    <app-footer />
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/Footer";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter,
  },

  data: () => ({
    bgColor: "rgba(2, 36, 75, 0.9)",
    isFlat: false,
  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        this.isFlat = false;
      } else {
        this.isFlat = true;
      }
      // let boxBanner = document.querySelector(".home-banner");
      // let boxToolBar = document.querySelector(".v-toolbar");

      // if (boxBanner && boxToolBar) {
      //   let bannerHeight = boxBanner.clientHeight;
      //   let toolBarHeight = boxToolBar.clientHeight;
      //   let scrollHeight = bannerHeight - toolBarHeight;

      //   if (
      //     document.body.scrollTop > scrollHeight ||
      //     document.documentElement.scrollTop > scrollHeight
      //   ) {
      //     this.bgColor = "rgba(2, 36, 75, 0.9)";
      //     this.isFlat = false;
      //   } else {
      //     this.bgColor = "transparent";
      //     this.isFlat = true;
      //   }
      // } else {
      //   this.bgColor = "rgba(2, 36, 75, 0.9)";
      //   this.isFlat = false;
      // }
    },
  },
};
</script>
