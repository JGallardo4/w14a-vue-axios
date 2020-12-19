<template>
  <article>
    <p>{{ cJoke }}</p>
  </article>
</template>

<script>
export default {
  name: "snake-joke",
  props: {
    joke: {
      type: String,
    },
  },
  computed: {
    cJoke() {
      return this.joke
        .toLowerCase()
        .split(" ")
        .join("_");
    },
  },
};
</script>

<style></style>
