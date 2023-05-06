<template>
  <v-container>
    <v-row>
      <v-col cols="12"
        ><h4 class="block-title">
          Giới thiệu về <span class="orange--text">Mentor</span>
        </h4></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" class="mentors-avatar">
        <div class="mentor-blocks">
          <div
            v-for="(mentor, key) in mentors"
            :key="key"
          >
            <router-link :to="'/mentors/' + mentor.id" class="mentor-block">
            <v-avatar
              size="198"
              class="mentor-avatar"
            >
              <img
                :alt="mentor.name"
                :src="require('@/assets/' + mentor.avatar)"
              >
            </v-avatar>
            <p class="mentor-name">{{ mentor.name }}</p>
            <p class="mentor-position">{{ mentor.position }}</p>
            </router-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mentors } from "@/commons/Mentor"

export default {
  name: "MentorComponent",

  data: () => ({
    mentors
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.mentors-avatar {
  .mentor-blocks {
    display: flex;
    column-gap: 64px;
    margin: 0 auto;
    width: fit-content;

    @media (max-width: 768px) {
      row-gap: 40px;
      flex-direction: column;
    }

    .mentor-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      border-radius: 0.375rem;
      transition: 0.1s;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      }

      .mentor-avatar {}

      .mentor-name {
        font-weight: 500;
        color: $grey-1;
        text-align: center;
        margin-top: 16px;
      }

      .mentor-position {
        color: $grey-1;
        text-align: center;
        margin-bottom: 0;
      }
    }
  }
}
</style>
