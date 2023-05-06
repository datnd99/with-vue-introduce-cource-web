<template>
  <v-container class="mb-8">
    <v-row>
      <v-col cols="12"><h4 class="block-title">Khóa học</h4></v-col>
      <v-col cols="12">
        <v-card class="d-flex flex-column flex-sm-row justify-center" flat tile>
          <v-card
            v-for="(item, index) in items"
            :key="index"
            class="pa-4 course-item"
            :class="{
              'mb-6 mx-4': $vuetify.breakpoint.xs,
              'mx-12': $vuetify.breakpoint.smAndUp,
            }"
            min-width="325"
            flat
          >
            <div class="course-title mb-5" v-html="item.name"></div>
            <div class="course-price mb-5">{{ item.price }} / khóa</div>
            <div class="course-content mb-5">
              <v-row
                v-for="(content, index) in item.contents"
                :key="index"
                no-gutters
                class="mb-1"
                style="flex-wrap: nowrap"
              >
                <v-col cols="2" class="flex-grow-0 flex-shrink-0">
                  <v-card tile flat>
                    <v-icon>mdi-check</v-icon>
                  </v-card>
                </v-col>
                <v-col
                  cols="1"
                  style="min-width: 100px; max-width: 100%"
                  class="flex-grow-1 flex-shrink-0"
                >
                  <v-card flat tile v-html="content" class="content-text">
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <div class="course-action mb-2 text-center">
              <a
                class="btnRegister"
                href="https://forms.gle/GwqXSQ9NEiQCX1cy9"
                target="_blank"
                >Đăng ký</a
              >
            </div>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CoursePriceComponent",

  data: () => ({
    items: [
      {
        name: "AWS Certified Solutions<br>Architect - Associate",
        price: "3,200,000",
        contents: [
          "Khai giảng: 08/05/2023",
          "Lịch học:  19:30 - 21:30 Thứ 2, 5",
          "Số lượng tối đa: 15 học viên",
          "Thời lượng: 22 buổi<br>(17 buổi học, 5 buổi sửa đề)",
        ],
      },
      {
        name: "AWS Certified<br>Developer - Associate",
        price: "3,200,000",
        contents: [
          "Khai giảng: 14/05/2023",
          "Lịch học:  19:30 - 21:30 Thứ 4, CN",
          "Số lượng tối đa: 15 học viên",
          "Thời lượng: 22 buổi<br>(17 buổi học, 5 buổi sửa đề)",
        ],
      },
      // {
      //   name: "AWS Certified<br>SysOps Administrator - Associate",
      //   price: "3,200,000",
      //   contents: [
      //     "Khai giảng: 16/05/2023",
      //     "Lịch học:  19:30 - 21:30 Thứ 3, 7",
      //     "Số lượng tối đa: 15 học viên",
      //     "Thời lượng: 20 buổi<br>(15 buổi học, 5 buổi sửa đề)",
      //   ],
      // },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.course-item {
  border: 3px solid $blue-dark;
  border-radius: 50px !important;
  color: $grey-1;

  .course-title {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }

  .course-price {
    font-size: 1.6rem;
    font-weight: bold;
    color: $blue-dark;
    text-align: center;
    text-shadow: -1px 0 #01ffff, 1px 0 #ff00ff;
  }

  .course-content {
    font-size: 1rem;
    .content-text {
      color: $grey-1 !important;
    }

    p {
      margin-bottom: 10px;
    }
  }
}

.btnRegister {
  font-size: 0.95rem;
  font-weight: 500;
  color: $white;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  width: 120px;
  padding: 6px;
  border-radius: 20px;
  background: $orange;
}
</style>
