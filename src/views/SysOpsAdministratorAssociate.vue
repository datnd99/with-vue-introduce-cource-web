<template>
  <v-container>
    <v-row class="mb-10">
      <v-col cols="12">
        <div class="course-name mt-6">
          Luyện thi<br /><span class="orange--text"
            >AWS Certified SysOps Administrator - Associate (SOA-C02)</span
          >
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <v-layout justify-center>
          <v-img
            :src="
              require('@/assets/AWS-Certified-SysOps-Administrator-Associate_badge.png')
            "
            max-width="280px"
          ></v-img>
        </v-layout>
      </v-col>
      <v-col cols="12" md="8">
        <div class="course-info-block-title mb-6 text-center text-md-left">
          Thông tin khóa học
        </div>
        <div class="course-detail-info mb-6">
          <v-row
            class="mb-3"
            no-gutters
            v-for="(detail, key) in details"
            :key="key"
          >
            <v-col cols="12" sm="4" md="3" class="pr-sm-5">
              <div class="text-center text-sm-right">
                {{ detail.label }}
              </div>
            </v-col>
            <v-col cols="12" sm="8" md="9">
              <div class="text-center text-sm-left">{{ detail.value }}</div>
            </v-col>
          </v-row>
        </div>
        <div class="text-center text-md-left">
          <a
            class="btnRegisterCourse"
            href="https://forms.gle/GwqXSQ9NEiQCX1cy9"
            target="_blank"
            >Đăng ký ngay</a
          >
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Giới thiệu chứng chỉ</div>
        <div class="course-info-block-content">
          <p>
            <b>AWS SysOps Administrator – Associate</b> là chứng chỉ khó nhất
            của Associate level, dành cho các quản trị viên hệ thống tối thiểu
            một năm kinh nghiệm, đang chịu trách nhiệm với vai trò vận hành hệ
            thống, bao gồm các nhiệm vụ triển khai, quản lý và vận hành trên
            AWS.
          </p>

          <p>
            SysOps Administrator có mặt trong toàn bộ vòng đời của bất kỳ dự án
            cloud nào. Họ chịu trách nhiệm chính trong việc triển khai, quản lý
            và vận hành các hệ thống cần thiết khác nhau trên nền tảng AWS nhất
            định. Bên cạnh đó, những chuyên gia này cũng chịu trách nhiệm duy
            trì và quản lý cơ sở hạ tầng AWS của tổ chức của họ. Hơn nữa, họ
            cũng tối ưu hóa chi phí của công ty và quản lý các hóa đơn tương
            ứng.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Mục tiêu khóa học</div>
        <div class="course-info-block-content">
          <ul>
            <li v-for="(goal, key) in goals" :key="key">{{ goal }}</li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Đối tượng tham gia khóa học</div>
        <div class="course-info-block-content">
          <ul>
            <li v-for="(student, key) in students" :key="key">{{ student }}</li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Yêu cầu đầu vào</div>
        <div class="course-info-block-content">
          <ul>
            <li v-for="(condition, key) in conditions" :key="key">
              {{ condition }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Hình thức học</div>
        <div class="course-info-block-content">
          <ul>
            <li v-for="(format, key) in formats" :key="key">
              {{ format }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Cam kết</div>
        <div class="course-info-block-content">
          <ul>
            <li v-for="(commit, key) in commits" :key="key">
              {{ commit }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Ưu đãi</div>
        <div class="course-info-block-content">
          <ul>
            <li v-for="(offer, key) in offers" :key="key">
              {{ offer }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="course-info-block-title">Nội dung khóa học</div>
        <div class="course-info-block-content">
          <v-row style="flex-wrap: nowrap" no-gutters class="mb-3">
            <v-col
              cols="2"
              class="flex-grow-0 flex-shrink-0 hidden-xs-only mr-3"
            >
              <v-card
                class="pa-3 font-weight-bold text-center"
                flat
                tile
                color="#02244b"
                dark
              >
                Session
              </v-card>
            </v-col>
            <v-col
              cols="1"
              style="max-width: 100%"
              class="flex-grow-1 flex-shrink-0"
            >
              <v-card
                class="pa-3 font-weight-bold text-center"
                flat
                tile
                color="#02244b"
                dark
              >
                Content
              </v-card>
            </v-col>
          </v-row>
          <v-row
            style="flex-wrap: nowrap"
            class="mb-3"
            no-gutters
            v-for="(content, key) in contents"
            :key="key"
          >
            <v-col
              cols="2"
              class="flex-grow-0 flex-shrink-0 hidden-xs-only mr-3"
            >
              <v-card
                class="pa-3 main-text d-flex flex-column align-center justify-center"
                height="100%"
                grid-list-md
                fill-height
                flat
                tile
                color="#ffeee3"
              >
                {{ key + 1 }}
              </v-card>
            </v-col>
            <v-col
              cols="1"
              style="max-width: 100%"
              class="flex-grow-1 flex-shrink-0"
            >
              <v-card
                class="pa-3 main-text fill-height"
                flat
                tile
                color="#fff9f5"
              >
                <div class="hidden-sm-and-up font-weight-bold">
                  Session {{ key + 1 }}:
                </div>
                <div v-for="(text, key) in content" :key="key">{{ text }}</div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SoaView",

  data: () => ({
    details: [
      {
        label: "Lịch khai giảng",
        value: "16-05-2023 (Tue)",
      },
      {
        label: "Học phí",
        value: "3,200,000 vnđ",
      },
      {
        label: "Lịch học",
        value:
          "20 buổi học (15 buổi học lý thuyết + Thực hành, 3 buổi luyện đề lý thuyết, 2 buổi luyện đề thực hành)",
      },
      {
        label: "Thời gian học",
        value: "Thứ 3, 7 từ 19:30 - 21:30",
      },
      {
        label: "Hình thức học",
        value: "Online - tương tác qua Google Meet",
      },
    ],
    goals: [
      "Triển khai, quản lý và vận hành các hệ thống có quy mô linh hoạt, mức độ khả dụng cao và khả năng chịu lỗi cao trên AWS",
      "Thực thi và kiểm soát luồng dữ liệu đến và đi từ AWS",
      "Nắm được các kiến thức, thông tin liên quan đến bài thi chứng chỉ SysOps Administrator - Associate (SOA-C02)",
      "Chọn dịch vụ AWS phù hợp dựa trên các yêu cầu về điện toán, dữ liệu hoặc bảo mật",
      "Xác định cách sử dụng phù hợp các biện pháp thực hành tốt nhất trong vận hành AWS",
      "Dự toán chi phí sử dụng AWS và xác định cơ chế kiểm soát chi phí vận hành",
      "Được cung cấp kiến thức thực tế, các bài lab liên quan đến chứng chỉ giúp học viên vận dụng vào thực tế công việc.",
      "Được giải thích chi tiết bộ đề luyện thi và các Tips làm bài thi",
      "Tự tin tham gia kỳ thi AWS Certified SysOps Administrator - Associate (SOA-C02)",
      "Nâng cao thu nhập, tăng cơ hội mở rộng việc làm",
    ],
    students: [
      "Developer có định hướng làm việc với AWS",
      "System/Networking Engineer định hướng làm việc với AWS",
      "Sinh viên muốn tìm hiểu, bổ sung kiến thức và chứng nhận năng lực về AWS",
      "Bridge System Engineer muốn tìm hiểu, bổ sung kiến thức và chứng nhận năng lực về AWS",
    ],
    conditions: [
      "Khả năng đọc hiểu tiếng Anh tương đối",
      "Đã hoàn thành khoá học SAA hoặc DVA",
      "Hiểu biết về các nguyên lý cơ bản của AWS – xây dựng kiến trúc cho cloud",
      "Có kiến thức cơ bản về API, Database",
      "Có kiến thức căn bản về network: TCP/IP, HTTP, DNS...",
    ],
    formats: [
      "Học ONLINE, tương tác trực tiếp với Mentor qua Google Meet",
      "Có video record gửi đến học viên sau mỗi buổi học",
      "Học viên, trợ giảng và Mentor trao đổi ngoài buổi học thông qua Slack",
    ],
    commits: [
      "PASS chứng chỉ AWS Certified SysOps Administrator - Associate nếu học viên tham gia trên 80% buổi học",
      "Mentor hỗ trợ học viên liên tục trong và sau khóa học.",
      "Hỗ trợ học viên học lại miễn phí cho đến khi pass chứng chỉ",
      "Hoàn lại học phí nếu học viên thấy không phù hợp trong 3 buổi học đầu tiên",
    ],
    offers: [
      "Ưu đãi giảm 200,000 vnđ cho học viên đăng ký theo nhóm",
      "Ưu đãi giảm 300,000 vnđ cho học viên cũ",
      "2 suất học bổng mỗi khóa - mỗi suất 1 triệu đồng : dành cho 2 học viên thi đỗ chứng chỉ AWS sớm nhất, trong vòng 1 tháng kể từ sau khi khóa học kết thúc.",
    ],
    contents: [
      [
        "Course Introduction - AWS Certified SysOps Administrator - Associate",
        "[SAA/DVA] Networking - VPC",
        "Lab / Quiz",
      ],
      ["[SAA/DVA] EC2 High Availability and Scalability", "Lab / Quiz"],
      ["[SAA/DVA] Networking - Route53", "Lab / Quiz"],
      [
        "[SAA/DVA] Amazon S3 Introduction",
        "Advanced Amazon S3 & Athena",
        "Lab / Quiz",
      ],
      [
        "Amazon S3 Security",
        "EC2 Storage and Data Management - EBS and EFS",
        "Lab / Quiz",
      ],
      ["EC2 for SysOps", "Lab / Quiz"],
      [
        "AMI - Amazon Machine Image",
        "Managing EC2 at Scale - Systems Manager (SSM) & Opswork",
        "Lab / Quiz",
      ],
      [
        "Elastic Beanstalk for SysOps",
        "CloudFormation for SysOps (part 1)",
        "Lab / Quiz",
      ],
      ["CloudFormation for SysOps (part 2)", "Lambda for SysOps", "Lab / Quiz"],
      ["Advanced Storage Section", "CloudFront", "Lab / Quiz"],
      ["Databases For SysOps", "Lab / Quiz"],
      ["Monitoring, Auditing and Performance", "Lab / Quiz"],
      ["AWS Account Management", "Disaster Recovery", "Lab / Quiz"],
      ["Security and Compliance for SysOps", "Lab / Quiz"],
      ["Indentity", "Other Service", "Lab / Quiz"],
      ["Pratice Exam 1 (Explanations and Tips)"],
      [
        "Hand-On Lab for SysOps Exam 1 (VPC, Cloudformation, Route53, AWS Backup, Lambda)",
      ],
      ["Pratice Exam 2 (Explanations and Tips)"],
      [
        "Hand-On Lab for SysOps Exam 2 (ALB + ASG, Eventbtidge, DynamoDB, Cloudwatch, WAF)",
      ],
      ["Pratice Exam 3 (Explanations and Tips)"],
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.course-name {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  color: $blue-dark;
}

.course-detail-info {
  color: $grey-1;
  font-weight: 500;
}

.course-info-block-title {
  text-transform: uppercase;
  color: $blue-dark;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.course-info-block-content {
  color: $grey-1;

  ul {
    li {
      margin-bottom: 8px;
    }
  }
}

.btnRegisterCourse {
  font-size: 1.1rem;
  font-weight: 500;
  color: $white;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  padding: 6px 30px;
  background: $orange;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba($color: $orange, $alpha: 0.2);
}
</style>
