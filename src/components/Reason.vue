<template>
  <v-container>
    <v-row>
      <v-col cols="12"
        ><h4 class="block-title">Vì sao nên chọn khóa học này?</h4></v-col
      >
      <v-col cols="12">
        <v-row no-gutters>
          <v-col
            cols="12"
            md="6"
            :class="{ 'pr-2': $vuetify.breakpoint.smAndUp }"
          >
            <div class="list-reasons px-5 fill-height">
              <div
                v-for="(reason, key) in reasons.left"
                :key="key"
                class="reason-item d-flex align-end"
                :class="{
                  md: $vuetify.breakpoint.mdAndUp,
                }"
              >
                <p>{{ reason }}</p>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            :class="{ 'pl-2': $vuetify.breakpoint.smAndUp }"
          >
            <div class="list-reasons px-5 fill-height">
              <div
                v-for="(reason, key) in reasons.right"
                :key="key"
                class="reason-item d-flex align-end"
                :class="{
                  md: $vuetify.breakpoint.mdAndUp,
                }"
              >
                <p>{{ reason }}</p>
              </div>
            </div></v-col
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ReasonComponent",

  data: () => ({
    reasons: {
      left: [
        "Sử dụng giáo trình trên Udemy - đã chứng minh sự hiệu quả và được hàng trăm ngàn học viên theo học.",
        "Có Mentor giải thích phần lý thuyết một cách dễ hiểu hơn, focus vào những điểm quan trọng.",
        "Liên tục thực hành + Quiz sau mỗi buổi học để củng cố kiến thức",
        "Cam kết PASS chứng chỉ nếu học viên tham gia trên 80% buổi học",
        "Cấp account Udemy để LUYỆN ĐỀ",
      ],
      right: [
        "Hướng dẫn đăng ký thi, cung cấp các tips and tricks luyện thi và đi thi",
        "Học viên có sự tin tin và kỹ năng nhất định để làm việc trên môi trường AWS.",
        "Học viên, trợ giảng và Mentor trao đổi thường xuyên với nhau thông qua group Slack không chỉ nội dung khóa học và còn các vấn đề gặp phải trong công việc",
        "Có trợ giảng hỗ trợ tạo guideline demo và hướng dẫn học viên thực hành",
        "Hỗ trợ học viên kể cả sau khóa học",
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.list-reasons {
  border: 1px solid $grey-2;

  .reason-item {
    border-bottom: 1px solid #ccc;
    min-height: 80px;

    &.md {
      min-height: 110px;
    }

    p {
      padding-top: 15px;
      color: $grey-1;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
}
</style>
