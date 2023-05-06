<template>
  <v-container class="mb-5">
    <v-card class="d-flex flex-column flex-sm-row justify-center" flat tile>
      <v-row style="max-width: 800px">
        <v-col cols="12"
          ><h4 class="block-title">
            <span class="block-title-faq">Câu hỏi thường gặp</span>
          </h4></v-col
        >
        <v-col cols="12">
          <v-row no-gutters>
            <v-col v-for="(question, key) in questions" :key="key" cols="12">
              <div class="question-box">
                <v-row no-gutters>
                  <v-col cols="2" sm="1" class="text-center">
                    <div
                      class="question-box-icon"
                      :class="{ actived: question.isActived }"
                    >
                      <v-btn
                        icon
                        @click="question.isActived = !question.isActived"
                      >
                        <v-icon v-if="!question.isActived" size="45px"
                          >mdi-plus</v-icon
                        >
                        <v-icon v-else size="45px">mdi-minus</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col cols="10" sm="11">
                    <div
                      class="question-box-title"
                      @click="question.isActived = !question.isActived"
                    >
                      {{ question.title }}
                    </div>
                    <div
                      class="question-box-content"
                      :class="{ hide: !question.isActived }"
                    >
                      <v-row
                        v-for="(content, index) in question.content"
                        :key="index"
                        no-gutters
                      >
                        <v-col>
                          <v-card
                            flat
                            tile
                            v-html="content"
                            class="content-text"
                          >
                          </v-card>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FaqComponent",

  data: () => ({
    questions: [
      {
        title: "AWS có những chứng chỉ và level như thế nào?",
        content: [
          "AWS Certification là bộ chứng chỉ được cấp bởi Amazon đánh giá mức độ hiểu biết về Cloud cụ thể là các dịch vụ của AWS cũng như việc áp dụng các dịch vụ đó 1 cách hiệu quả vào trong các bài toán thực tế. Bộ chứng chỉ này được chia ra theo các vai trò là Cloud Practitioner, Architect, Developer, và Operations, ngoài ra cộng thêm Specialty. Về mức độ khó thì có 3 mức độ là Foundational, Associate và Professional. Chi tiết về các chứng chỉ các bạn tham khảo ở link dưới đây:",
          "<a href='https://aws.amazon.com/certification/' target='_black' class='text-decoration-none'>https://aws.amazon.com/certification/</a>",
        ],
        isActived: 0,
      },
      {
        title:
          "Sự khác nhau giữa chứng chỉ AWS Solutions Architect and Developer là gì?",
        content: [
          "<b>AWS Solutions Architect (exam) tests:</b> Kiểm tra kinh nghiệm của bạn trong việc thiết kế và triển khai các hệ thống có khả năng mở rộng, tính sẵn sàng cao và chịu lỗi trên AWS.",
          "<b>AWS Certified Developer (exam) tests:</b> Kiểm tra kinh nghiệm của bạn trong việc phát triển và bảo trì các ứng dụng trên nền tảng AWS.",
          "AWS Solution Architects (Kiến trúc sư giải pháp) được đào tạo để thiết kế, xây dựng và cung cấp cơ sở hạ tầng AWS mà một tổ chức hoặc ứng dụng sẽ chạy trên đó. Kiến trúc sư giải pháp sẽ cần hiểu biết toàn diện về tất cả các dịch vụ AWS cơ bản (phổ biến nhất), đối tượng và lý do chúng được sử dụng cũng như cách thức hoạt động cùng nhau để tạo ra hệ thống chịu lỗi, có tính sẵn sàng cao.",
          "AWS Certified Developer được đào tạo để sử dụng các dịch vụ AWS trong quá trình phát triển hoặc sử dụng ứng dụng. Nói cách khác, làm thế nào để sử dụng các tài nguyên được thiết kế bởi Solution Architects để phát triển một ứng dụng trên đó. Vì vậy, nếu AWS Solution Architects thiết kế cơ sở hạ tầng, thì Developer sẽ tìm ra cách sử dụng các tài nguyên đó để phát triển ứng dụng trên đó (nghĩ về lệnh gọi API, cấu trúc cơ sở dữ liệu, giao tiếp ứng dụng, v.v.).",
        ],
        isActived: 0,
      },
      {
        title: "Nội dung khóa học",
        content: [
          "Nội dung khóa học bao gồm phần lý thuyết dựa trên Slide của Stephane - Udemy + Phần thực hành và bài Quiz do Mentor chuẩn bị.",
          "Chi tiết các bạn xem thêm tại:",
          "<a href='https://phongaws.com/luyen-thi-aws-certified-solutions-architect-associate' target='_blank' class='text-decoration-none'>https://phongaws.com/luyen-thi-aws-certified-solutions-architect-associate</a>",
          "<a href='https://phongaws.com/luyen-thi-aws-certified-developer-associate' target='_blank' class='text-decoration-none'>https://phongaws.com/luyen-thi-aws-certified-developer-associate</a>",
        ],
        isActived: 0,
      },
      {
        title: "Yêu cầu đầu vào",
        content: [
          "Khả năng đọc hiểu tiếng Anh tương đối",
          "Biết một số tập lệnh Linux căn bản, remote SSH",
          "Đã lập trình một ngôn ngữ bất kỳ",
          "Có kiến thức căn bản về network: TCP/IP, HTTP, DNS…",
        ],
        isActived: 0,
      },
      {
        title: "Hỗ trợ ngoài giờ học như thế nào?",
        content: [
          "Học viên được invite vào group Slack.",
          "Học viên, Mentor và trợ giảng có thể hỏi đáp, trao đổi với nhau thông qua group trên Slack.",
        ],
        isActived: 0,
      },
      {
        title: "Học phí",
        content: [
          "Học phí được thanh toán 1 lần trước lúc bắt đầu khoá học.",
          "Học phí không bao gồm chi phí thi chứng chỉ và chi phí sử dụng aws service.",
        ],
        isActived: 0,
      },
      {
        title: "Quy định hoàn học phí",
        content: [
          "Hoàn lại học phí nếu học viên thấy không phù hợp trong 3 buổi học đầu tiên",
        ],
        isActived: 0,
      },
      {
        title: "Quy định học lại và bảo lưu khóa học",
        content: [
          "Khóa học sẽ khai giảng định kỳ 3 tháng 1 lần. Nếu học viên giữa chừng vì lý do nào đó không thể tiếp tục có thể bảo lưu khóa học và có thể tham gia tiếp lần khai giảng tiếp theo mà không cần đóng thêm học phí.",
          "Học viên hết khóa học vẫn chưa PASS chứng chỉ có thể học lại FREE.",
        ],
        isActived: 0,
      },
      {
        title: "Về tài khoản AWS và tài khoản Udemy",
        content: [
          "Học viên tự chuẩn bị tài khoản aws để thực hành, Mentor sẽ hướng dẫn cách theo dõi chi phí và cách sử dụng tài nguyên hiệu quả ở đầu khoá học.",
          "Mentor cung cấp account Udemy để học viên có thể làm hand on và làm bài test luyện thi.",
        ],
        isActived: 0,
      },
      {
        title: "Về tài liệu khóa học",
        content: [
          "Tất cả tài liệu sử dụng trong khóa học + video record được lưu trữ ở Google Drive và share cho học viên kể cả sau khóa học.",
        ],
        isActived: 0,
      },
      {
        title: "Nghỉ 1 buổi có được học bù không?",
        content: [
          "Mỗi buổi học đều có video record, học viên có thể xem lại, chỗ nào chưa hiểu sẽ cùng nhau trao đổi trong nhóm chat.",
        ],
        isActived: 0,
      },
      {
        title: "Cơ hội việc làm sau khi sở hữu chứng chỉ AWS",
        content: [
          "Với sự phổ biến của Cloud computing, ngày càng nhiều doanh nghiệp chuyển hoạt động kinh doanh của mình lên cloud. Đặc biệt trong và sau thời kỳ đại dịch Covid, chuyển đổi số dường như là nhu cầu tất để duy trì và mở rộng business.",
          "Từ tháng 2/2022, Amazon Web Services (AWS) đã ra mắt một Local Zone mới tại Hà Nội. Đây cũng là Local Zone đầu tiên của được đặt tại Việt Nam cung cấp hiệu năng trễ dưới 10 mili giây cho end-user.",
          "Tại Nhật, có rất nhiều công ty lâu đời quyết định migrate hệ thống của họ lên cloud với kế hoạch dài hạn 5 - 10 năm. Việt Nam là một trong những đối tác outsource của Nhật.",
          "Các công ty về tài chính ngân hàng, chứng khoán tại Việt Nam vì nhiều lý do liên quan đến bảo mật nên rất ngại việc sử dụng nền tảng Cloud, tuy nhiên những năm gần đây Cloud thực sự là một chiến lược có thể giúp các ngân hàng bứt phá về đổi mới, sáng tạo. Các học viên đang làm trong các công ty về tài chính, ngân hàng cũng bắt đầu học cách sử dụng Cloud để phục vụ công việc.",
          "Với những lý do trên, việc sở hữu chứng chỉ AWS chắc chắn giúp bạn tăng sức cạnh tranh trên thị trường và mang lại thu nhập tốt hơn.",
        ],
        isActived: 0,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.block-title-faq {
  font-size: 2rem;
  font-style: italic;
  text-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.3);
  display: inline-block;
  padding: 0 50px 15px;
  border-bottom: 4px solid $orange;
}
.question-box {
  color: $grey-1;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: 1px solid $grey-4;
  border-radius: 10px;
  box-shadow: 2px 4px 0px rgba($color: #000000, $alpha: 0.3);

  .question-box-icon {
    padding: 5px 0 0 0;
    i.v-icon.v-icon {
      color: $blue-dark;
      cursor: pointer;
    }

    &.actived {
      i.v-icon.v-icon {
        color: $orange;
      }
    }
  }

  .question-box-title {
    padding: 10px 0;
    font-size: 1.15rem;
    cursor: pointer;
  }

  .question-box-content {
    padding: 15px 0 25px;
  }
  .content-text {
    color: $grey-1 !important;
  }
}
</style>
