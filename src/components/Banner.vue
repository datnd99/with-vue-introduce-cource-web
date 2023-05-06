<template>
  <v-container fluid class="home-banner">
    <v-overlay absolute style="z-index: 1" color="#02244b" opacity="0.85">
      <v-layout
        justify-center
        align-center
        column
        pa-5
        style="max-width: 850px"
      >
        <v-row no-gutters class="mb-5">
          <v-col cols="12">
            <v-card
              class="d-flex flex-row align-center"
              flat
              tile
              color="transparent"
            >
              <v-card flat tile color="transparent">
                <div
                  class="font-weight-bold orange--text"
                  :class="{
                    'text-h2 mr-2': $vuetify.breakpoint.xs,
                    'banner-big-text mr-4': $vuetify.breakpoint.smAndUp,
                  }"
                >
                  AWS
                </div>
              </v-card>
              <v-card flat tile color="transparent">
                <div
                  :class="{
                    'body-2': $vuetify.breakpoint.xs,
                    'text-h5': $vuetify.breakpoint.smAndUp,
                  }"
                >
                  Chinh phục cùng<br />Mentor Phong Nguyen
                </div>
              </v-card>
            </v-card>
          </v-col>
          <v-col cols="12">
            <div
              class="font-weight-bold orange--text pl-5"
              :class="{
                'text-h2': $vuetify.breakpoint.xs,
                'banner-big-text': $vuetify.breakpoint.smAndUp,
              }"
            >
              Certificate
            </div>
          </v-col>
        </v-row>
      </v-layout>
      <v-layout justify-center align-center column pa-5>
        <v-row no-gutters>
          <v-col cols="12">
            <v-card
              class="d-flex flex-column flex-sm-row align-center"
              flat
              tile
              color="transparent"
            >
              <v-card
                flat
                tile
                color="transparent"
                class="order-sm-2 ml-sm-12 mb-3 text-center"
              >
                <div class="text-h5 mb-2">Lịch khai giảng</div>
                <div class="mb-1">
                  AWS Certified Solutions Architect - Associate
                </div>
                <div class="orange--text mb-3">
                  <span class="open-date">08-05-2023 (Mon)</span>
                </div>
                <div class="mb-1">AWS Certified Developer - Associate</div>
                <div class="orange--text">
                  <span class="open-date">14-05-2023 (Sun)</span>
                </div>
                <!-- <div class="mb-1">
                  AWS Certified SysOps Administrator - Associate
                </div>
                <div class="orange--text">
                  <span class="open-date">16-05-2023 (Tue)</span>
                </div> -->
              </v-card>
              <v-card flat tile color="transparent" class="order-sm-1 mr-sm-12">
                <a
                  class="btnDangky"
                  href="https://forms.gle/GwqXSQ9NEiQCX1cy9"
                  target="_blank"
                  >Đăng ký ngay</a
                >
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  name: "AppBanner",
  data() {
    return {
      menus: [
        { title: "Trang chủ", link: "/", icon: "mdi-home" },
        { title: "Khóa học", link: "/", icon: "mdi-book-multiple" },
        { title: "Mentor", link: "/", icon: "mdi-account-cowboy-hat" },
        { title: "Liên hệ", link: "/", icon: "mdi-email" },
        { title: "Q&A", link: "/", icon: "mdi-chat-question" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.home-banner {
  width: 100%;
  min-height: 445px;
  height: 100vh;
  background: url("../assets/banner-background.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}

.open-date {
  display: inline-block;
  padding: 10px 50px 0;
  border-top: 1px solid #fff;
}

.banner-big-text {
  font-size: 8rem;
  line-height: 6.6rem;
}

.btnDangky {
  padding: 8px 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: $white;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  border: 3px solid $white;
  border-radius: 30px !important;
}
</style>
