<template>
  <article>
    <p>{{ cJoke }}</p>
  </article>
</template>

<script>
export default {
  name: "loud-joke",
  props: {
    joke: {
      type: String,
    },
  },
  computed: {
    cJoke() {
      return this.joke.toUpperCase();
    },
  },
};
</script>

<style></style>
