<template>
  <article>
    <p>{{ joke }}</p>
  </article>
</template>

<script>
export default {
  name: "normal-joke",
  props: {
    joke: {
      type: String,
    },
  },
};
</script>

<style></style>
