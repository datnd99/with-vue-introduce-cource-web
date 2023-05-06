<template>
  <v-footer color="#02244b" dark class="pa-2">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(icon, key) in icons"
        :key="key"
        class="mx-4 white--text"
        icon
        link
        :href="icon.link"
        target="_blank"
      >
        <v-icon size="24px">
          {{ icon.icon }}
        </v-icon>
      </v-btn>
      <v-col class="pt-0 text-center white--text text-caption" cols="12">
        Copyright © 2023. Phong Nguyen
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",

  data: () => ({
    icons: [
      {
        icon: "mdi-email",
        link: "mailto:phongnx.aws@gmail.com",
      },
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/phonhnx/",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/phongnx/",
      },
      {
        icon: "mdi-skype",
        link: "https://join.skype.com/invite/rJRgjxbVy5WS",
      },
    ],
  }),
};
</script>
