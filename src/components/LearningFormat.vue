<template>
  <v-container>
    <v-row>
      <v-col cols="12"><h4 class="block-title">Hình thức học</h4></v-col>
      <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
        <v-card tile elevation="0" class="d-flex justify-center">
          <v-card tile elevation="0" max-width="250">
            <v-layout justify-center>
              <v-img
                max-width="60"
                :src="require('@/assets/' + item.image)"
                class=""
              ></v-img>
            </v-layout>
            <div class="text-center my-3 common-text">{{ item.content }}</div>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LearningFormatComponent",

  data: () => ({
    items: [
      {
        image: "icon-notebook.png",
        content: "Học ONLINE, tương tác trực tiếp với Mentor qua Google Meet",
      },
      {
        image: "icon-google-meet.png",
        content: "Có video record gửi đến học viên sau mỗi buổi học",
      },
      {
        image: "icon-slack.png",
        content:
          "Học viên, trợ giảng và Mentor trao đổi ngoài buổi học thông qua Slack",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";
</style>
