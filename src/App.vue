<template>
  <main id="app">
    <jokes></jokes>
  </main>
</template>

<script>
import Jokes from "./components/Jokes.vue";

export default {
  name: "App",
  components: {
    Jokes,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
