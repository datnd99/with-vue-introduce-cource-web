<template>
  <v-container
    fluid
    class="px-0"
    :class="{
      'my-3': $vuetify.breakpoint.xs,
      'my-5': $vuetify.breakpoint.smAndUp,
    }"
  >
    <v-row no-gutters
      ><v-col cols="12"> <div class="liner"></div> </v-col
    ></v-row>
  </v-container>
</template>

<script>
export default {
  name: "LineComponent",

  data: () => ({
    datas: [],
  }),
};
</script>

<style lang="scss" scoped>
.liner {
  height: 1px;
}
</style>
