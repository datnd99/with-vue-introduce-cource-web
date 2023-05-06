<template>
  <v-container>
    <v-row class="mb-10">
      <v-col cols="12">
        <div class="course-name mt-6">
          Luyện thi<br /><span class="orange--text"
            >AWS Certified Solutions Architect - Associate (SAA-C03)</span
          >
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <v-layout justify-center>
          <v-img
            :src="
              require('@/assets/AWS-Certified-Solutions-Architect-Associate_badge.png')
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
            Chứng chỉ AWS Certified Solutions Architect - Associate (Kiến trúc
            sư giải pháp) thể hiện một cách hiệu quả kiến thức về cách thiết kế
            và triển khai các ứng dụng bảo mật và mạnh mẽ trên nền tảng các công
            nghệ của AWS. Chứng chỉ này chú trọng vào thiết kế các giải pháp tối
            ưu chi phí và perfomance, thể hiện sự am hiểu về AWS
            Well-Architected. Chứng chỉ này có thể nâng cao profile và thu nhập
            của bạn, đồng thời gia tăng uy tín và sự tự tin của bạn khi tương
            tác với những bên liên quan và khách hàng.
          </p>

          <p>
            Amazon khuyến nghị rằng chứng chỉ AWS Certified Solutions Architect
            - Associate được thiết kế cho các cá nhân đảm nhiệm vai trò kiến
            trúc sư giải pháp (Solution Architect) và có ít nhất 1 năm kinh
            nghiệm thực tế trong việc thiết kế các hệ thống phân tán khả dụng,
            tiết kiệm chi phí, dung sai cao và có quy mô linh hoạt trên AWS.
          </p>

          <p>
            Và tất nhiên chúng ta cũng không cần tới tận 1 năm để đỗ chứng chỉ
            này!
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
  name: "SaaView",

  data: () => ({
    details: [
      {
        label: "Lịch khai giảng",
        value: "08-05-2023 (Mon)",
      },
      {
        label: "Học phí",
        value: "3,200,000 vnđ",
      },
      {
        label: "Lịch học",
        value:
          "22 buổi học (17 buổi học lý thuyết + Thực hành, 5 buổi luyện đề)",
      },
      {
        label: "Thời gian học",
        value: "Thứ 2, 5 từ 19:30 - 21:30",
      },
      {
        label: "Hình thức học",
        value: "Online - tương tác qua Google Meet",
      },
    ],
    goals: [
      "Hiểu biết tổng quan về cơ sở hạ tầng AWS",
      "Hiểu biết về các nguyên tắc kiến trúc cơ bản khi xây dựng trên AWS Cloud",
      "Nắm được các kiến thức, thông tin liên quan đến bài thi chứng chỉ AWS-Solution Architect Associate (SAA-C03)",
      "Khả năng nhận biết và xác định các yêu cầu kỹ thuật đối với ứng dụng dựa trên AWS",
      "Khả năng nhận biết dịch vụ AWS nào đáp ứng được điều kiện kỹ thuật đề ra",
      "Nắm vững kiến thức cơ bản về các dịch vụ nên tảng của AWS: Computing, Network, Database và Storage",
      "Hiểu biết về các tính năng và công cụ bảo mật mà AWS cung cấp cũng như mối liên quan giữa các tính năng và công cụ đó với các dịch vụ truyền thống",
      "Được cung cấp kiến thức thực tế, các bài lab liên quan đến chứng chỉ giúp học viên vận dụng vào thực tế công việc.",
      "Được giải thích chi tiết bộ đề luyện thi và các Tips làm bài thi",
      "Tự tin tham gia kỳ thi AWS-Solution Architect Associate",
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
      "Biết một số tập lệnh Linux căn bản, remote SSH",
      "Đã lập trình một ngôn ngữ bất kỳ",
      "Có kiến thức căn bản về network: TCP/IP, HTTP, DNS...",
    ],
    formats: [
      "Học ONLINE, tương tác trực tiếp với Mentor qua Google Meet",
      "Có video record gửi đến học viên sau mỗi buổi học",
      "Học viên, trợ giảng và Mentor trao đổi ngoài buổi học thông qua Slack",
    ],
    commits: [
      "PASS chứng chỉ AWS-Solution Architect Associate nếu học viên tham gia trên 80% buổi học",
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
        "Introduction - AWS Certified Solutions Architect Associate",
        "IAM & AWS CLI",
        "Lab / Quiz",
      ],
      ["EC2 Fundamentals", "Lab / Quiz"],
      [
        "EC2 - Solutions Architect Associate Level",
        "EC2 Instance Storage",
        "Lab / Quiz",
      ],
      ["High Availability and Scalability: ELB & ASG", "Lab / Quiz"],
      ["DNS, Route 53 (Record, Policy )", "Lab / Quiz"],
      ["Networking - VPC (Part 1)", "Lab / Quiz"],
      ["Networking - VPC (Part 2)", "Lab / Quiz"],
      [
        "AWS Fundamentals: RDS + Aurora + ElastiCache",
        "Classic Solutions Architecture Discussions",
        "Lab / Quiz",
      ],
      ["Amazon S3 Introduction", "AWS SDK, IAM Roles & Policies", "Lab / Quiz"],
      [
        "Advanced Amazon S3",
        "CloudFront & AWS Global Accelerator",
        "Lab / Quiz",
      ],
      ["Decoupling applications: SQS, SNS, Kinesis, Active MQ", "Lab / Quiz"],
      [
        "WS Storage Extras",
        "Containers on AWS: ECS, Fargate, ECR & EKS",
        "Lab / Quiz",
      ],
      [
        "Serverless Overviews from a Solution Architect Perspective",
        "Serverless Solution Architecture Discussions",
        "Lab / Quiz",
      ],
      ["Databases in AWS", "Data & Analytics", "Machine Learning", "Quiz"],
      ["AWS Monitoring & Audit: CloudWatch, CloudTrail & Config", "Lab / Quiz"],
      [
        "Identity and Access Management (IAM) - Advanced",
        "WS Security & Encryption: KMS, SSM Parameter Store, CloudHSM, Shield, WAF",
        "Lab / Quiz",
      ],
      [
        "Disaster Recovery & Migrations",
        "More Solution Architectures",
        "Other Services",
        "Quiz",
      ],
      ["Pratice Exam 1 (Explanations and Tips)"],
      ["Pratice Exam 2 (Explanations and Tips)"],
      ["Pratice Exam 3 (Explanations and Tips)"],
      ["Pratice Exam 4 (Explanations and Tips)"],
      ["Pratice Exam 5 (Explanations and Tips)"],
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
