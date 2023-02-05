<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<template>
  <v-app>
    <Todo />
  </v-app>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

// keen ui reset
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 100%;
}
</style>
