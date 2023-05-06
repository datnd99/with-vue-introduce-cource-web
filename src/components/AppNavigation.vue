<template>
  <v-container>
    <v-toolbar
      flat
      color="transparent"
      dark
      style="border-bottom: 1px solid #ccc !important"
      class="mb-2"
    >
      <router-link to="/">
        <img
          class="mr-3"
          :src="require('@/assets/LOGO-Phong-AWS.png')"
          height="50"
        />
      </router-link>
      <v-toolbar-title
        ><router-link to="/" class="text-decoration-none white--text"
          >Phong AWS</router-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu
          offset-y
          transition="scale-transition"
          v-for="(menu, key) in menus"
          :key="key"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-if="menu.subs.length" text v-bind="attrs" v-on="on">{{
              menu.title
            }}</v-btn>
            <v-btn v-else text v-bind="attrs" v-on="on" :to="menu.link">{{
              menu.title
            }}</v-btn>
          </template>
          <v-list v-if="menu.subs.length">
            <v-list-item
              v-for="(sub, key) in menu.subs"
              link
              :to="sub.link"
              :key="key"
              color="blue darken-3"
            >
              <v-list-item-title>{{ sub.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      dark
      disable-resize-watcher
      absolute
      right
    >
      <v-list nav dense>
        <div v-for="(menu, key) in menus" :key="key">
          <v-list-group
            v-if="menu.subs.length"
            :prepend-icon="menu.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="menu.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="sub in menu.subs"
              :key="sub.title"
              link
              :to="sub.link"
            >
              <v-list-item-content>
                <v-list-item-title v-text="sub.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else link :to="menu.link">
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Meal Prep",
      drawer: false,
      menus: [
        { title: "Trang chủ", link: "/", icon: "mdi-home", subs: [] },
        {
          title: "Khóa học",
          link: "#",
          icon: "mdi-book-multiple",
          subs: [
            {
              title: "AWS Certified Solutions Architect - Associate",
              link: this.$router.resolve({ name: "saa" }).href,
            },
            {
              title: "AWS Certified Developer - Associate",
              link: this.$router.resolve({ name: "da" }).href,
            },
            // {
            //   title: "AWS Certified SysOps Administrator - Associate",
            //   link: this.$router.resolve({ name: "soa" }).href,
            // },
          ],
        },
        {
          title: "Mentor",
          link: "/#mentor",
          icon: "mdi-account-cowboy-hat",
          subs: [],
        },
        { title: "Liên hệ", link: "/#contact", icon: "mdi-email", subs: [] },
        { title: "Q&A", link: "/#faq", icon: "mdi-chat-question", subs: [] },
      ],
    };
  },

  mounted() {
    //
  },
};
</script>

<style scoped></style>
