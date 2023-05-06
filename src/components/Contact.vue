<template>
  <v-container
    fluid
    fill-height
    class="contact-banner"
    :class="{
      'contact-height-sx': $vuetify.breakpoint.xs,
      'contact-height-sm': $vuetify.breakpoint.smAndUp,
    }"
  >
    <v-overlay absolute style="z-index: 1" color="#02244b" opacity="0.85">
      <v-row
        no-gutters
        class="text-center mt-3"
        :class="{
          'contact-width-large': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-col cols="12">
          <div
            class="block-title"
            :class="{
              'mb-6': $vuetify.breakpoint.xs,
              'mb-10': $vuetify.breakpoint.smAndUp,
            }"
          >
            Liên hệ với chúng tôi
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="mb-5">
          <div
            class="contact-block-title"
            :class="{
              'mb-3': $vuetify.breakpoint.smAndUp,
            }"
          >
            Skype
          </div>
          <div>
            <a
              href="https://join.skype.com/invite/rJRgjxbVy5WS"
              target="_blank"
              class="white--text text-decoration-none"
              >phong.xuan1</a
            >
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="mb-5">
          <div
            class="contact-block-title"
            :class="{
              'mb-3': $vuetify.breakpoint.smAndUp,
            }"
          >
            Email
          </div>
          <div>
            <a
              href="mailto:phongnx.aws@gmail.com"
              target="_blank"
              class="white--text text-decoration-none"
              >phongnx.aws@gmail.com</a
            >
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="mb-5">
          <div
            class="contact-block-title"
            :class="{
              'mb-3': $vuetify.breakpoint.smAndUp,
            }"
          >
            Social
          </div>
          <div>
            <v-btn
              v-for="(icon, key) in icons"
              :key="key"
              class="white--text"
              icon
              link
              :href="icon.link"
              target="_blank"
            >
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  name: "AppBanner",
  data() {
    return {
      icons: [
        { icon: "mdi-linkedin", link: "https://www.linkedin.com/in/phongnx/" },
        { icon: "mdi-facebook", link: "https://www.facebook.com/phonhnx/" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.contact-width-large {
  min-width: 900px;
}

.contact-banner {
  width: 100%;
  background: url("../assets/contact-background.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}

.block-title {
  color: $white !important;
  font-size: 2rem !important;
}

.contact-height-sx {
  min-height: 400px;
}

.contact-height-sm {
  min-height: 350px;
}

.contact-block-title {
  color: $orange;
  text-transform: uppercase;
  font-size: 1.15rem;
  font-weight: 500;
}
</style>
