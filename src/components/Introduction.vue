<template>
  <v-container>
    <v-row no-gutters class="mt-12">
      <v-col cols="12" md="4" class="pr-2">
        <h4 class="block-title text-left">
          Chứng chỉ <span class="orange--text">AWS</span><br />có thực sự khó?
        </h4>
        <div class="person-info mt-8 mb-3 font-italic">
          Bản thân mình đã từng thi đến lần thứ 3 mới có thể pass được chứng chỉ
          AWS Certified Solutions Architect - Associate. Vì vậy, mình hiểu được
          những khó khăn mà nhiều người gặp phải khi học các khóa Online
        </div>
        <div class="mentor-name mt-n2 mb-2">
          <div>-</div>
          Mentor Phong Nguyen
        </div>
      </v-col>
      <v-col cols="12" md="8" class="pl-2 pt-5">
        <v-row>
          <v-col
            cols="12"
            md="6"
            :class="{ 'py-0': $vuetify.breakpoint.xs }"
            v-for="(item, key) in items"
            :key="key"
          >
            <div
              class="intro-item mb-8"
              v-for="(lists, key2) in item"
              :key="key2"
            >
              <div class="intro-item-content">
                <ul>
                  <li v-for="(list, key3) in lists" :key="key3">{{ list }}</li>
                </ul>
              </div>
              <div class="intro-item-bg"></div>
              <div style="padding: 15px 5px">
                <ul>
                  <li v-for="(list, key3) in lists" :key="key3">{{ list }}</li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IntroductionComponent",

  data: () => ({
    items: {
      left: [
        [
          "Quá nhiều lý thuyết",
          "Chưa có cơ hội thực hành và làm nhiều với AWS",
        ],
        [
          "Khó phân biệt được case nào thì sử service nào vì có nhiều service khá giống nhau",
          "Không có người hỗ trợ",
        ],
      ],
      right: [
        [
          "Không có động lực để kiên trì trong thời gian dài",
          "Tiếng Anh chưa tốt để hiểu hết bài học",
        ],
        [
          "Chưa có kinh nghiệm trong thực tế nên không biết đâu là điểm cần focus vào khi học",
        ],
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.person-info {
  color: $grey-1;
  position: relative;

  &:before {
    position: absolute;
    content: open-quote;
    font-size: 3.8rem;
    margin-left: 0;
    margin-top: -2.8rem;
  }
}

.mentor-name {
  font-weight: 500;
  color: $grey-1;
}

.intro-item {
  min-height: 120px;
  position: relative;
  .intro-item-content {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: $white;
    border-radius: 20px;
    padding: 15px 5px;

    ul {
      color: $grey-1;
      li {
        margin-bottom: 10px;
      }
    }
  }
  .intro-item-bg {
    position: absolute;
    z-index: 1;
    border-radius: 20px 0 0 20px;
    width: 70%;
    height: 100%;
    box-shadow: 0 0 0 2px $grey-2;
  }
}
</style>
