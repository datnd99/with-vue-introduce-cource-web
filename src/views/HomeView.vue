<template>
  <div>
    <banner-component />

    <introduction-component />

    <line-component />

    <reason-component />

    <line-component />

    <mentor-component id="mentor" />

    <line-component />

    <course-goal-component />

    <line-component />

    <learning-format-component />

    <line-component />

    <course-price-component id="course-price" />

    <contact-component id="contact" />

    <line-component />

    <faq-component id="faq" />
  </div>
</template>

<script>
import LineComponent from "@/components/Line";
import BannerComponent from "@/components/Banner";
import IntroductionComponent from "@/components/Introduction";
import ReasonComponent from "@/components/Reason";
import MentorComponent from "@/components/Mentor";
import CourseGoalComponent from "@/components/CourseGoal";
import LearningFormatComponent from "@/components/LearningFormat";
import CoursePriceComponent from "@/components/CoursePrice";
import ContactComponent from "@/components/Contact";
import FaqComponent from "@/components/Faq";

export default {
  name: "HomeView",

  components: {
    LineComponent,
    BannerComponent,
    IntroductionComponent,
    ReasonComponent,
    MentorComponent,
    CourseGoalComponent,
    LearningFormatComponent,
    CoursePriceComponent,
    ContactComponent,
    FaqComponent,
  },
};
</script>
