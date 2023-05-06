<template>
  <v-container>
    <v-row>
      <v-col cols="12"><h4 class="block-title">Mục tiêu khóa học</h4></v-col>
      <v-col cols="12">
        <v-card
          v-for="(item, index) in items"
          :key="index"
          tile
          elevation="0"
          class="pa-4 mb-3 text-center rounded"
          :class="getClassMargin(index)"
          :color="getColor(index)"
          dark
          >{{ item }}</v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CourseGoalComponent",

  data: () => ({
    colors: {
      0: "#057bb9",
      1: "#1c3468",
      2: "#2c5095",
    },
    items: [
      "Hiểu biết tổng quan về cơ sở hạ tầng AWS",
      "Hiểu biết về các nguyên tắc kiến trúc cơ bản khi xây dựng trên AWS Cloud",
      "Nắm được các kiến thức, thông tin liên quan đến bài thi chứng chỉ AWS",
      "Khả năng nhận biết và xác định các yêu cầu kỹ thuật đối với ứng dụng dựa trên AWS",
      "Khả năng nhận biết dịch vụ AWS nào đáp ứng được điều kiện kỹ thuật đề ra",
      "Nắm vững kiến thức cơ bản về các dịch vụ nên tảng của AWS: Computing, Network, Database và Storage",
      "Được cung cấp kiến thức thực tế, các bài lab liên quan đến chứng chỉ giúp học viên vận dụng vào thực tế công việc.",
      "Được giải thích chi tiết bộ đề luyện thi và các Tips làm bài thi",
      "Tự tin tham gia kỳ thi AWS",
      "Nâng cao thu nhập, tăng cơ hội mở rộng việc làm",
    ],
  }),
  methods: {
    getColor(key) {
      let colorKey = Number(key + 1);
      if (colorKey > 2) {
        colorKey = colorKey % 3;
      }
      return this.colors[colorKey];
    },

    getClassMargin(key) {
      let classKey = Number(key + 1);
      let className = "";
      if (classKey % 2 == 1) {
        className = "box-mar-left";
      } else {
        className = "box-mar-right";
      }
      return className;
    },
  },
};
</script>
