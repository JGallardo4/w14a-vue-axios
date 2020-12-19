<template>
  <button @click="loadNewJoke()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  methods: {
    loadNewJoke() {
      this.$store.dispatch("getNewJoke");
    },
  },
};
</script>

<style></style>
