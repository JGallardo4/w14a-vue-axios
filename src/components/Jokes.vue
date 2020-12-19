<template>
  <section id="jokes">
    <my-button>Load new joke</my-button>

    <section id="joke-tabs-container">
      <div id="tabs-container">
        <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['tab-button', { active: currentTab === tab }]"
          v-on:click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <component v-bind:is="currentTabComponent" class="joke"></component>
    </section>
  </section>
</template>

<script>
import LoudJoke from "./LoudJoke.vue";
import MyButton from "./MyButton.vue";
import NormalJoke from "./NormalJoke.vue";
import SnakeJoke from "./SnakeJoke.vue";

export default {
  components: {
    NormalJoke,
    LoudJoke,
    SnakeJoke,
    MyButton,
  },

  name: "jokes",

  data: function() {
    return {
      currentTab: "Normal Joke",
      tabs: ["Normal Joke", "Loud Joke", "Snake Joke"],
    };
  },

  computed: {
    currentTabComponent: function() {
      return this.currentTab
        .toLowerCase()
        .split(" ")
        .join("-");
    },
  },
};
</script>

<style lang="scss" scoped>
#jokes {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  padding: 2rem;
  gap: 1rem;

  #joke-tabs-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    border-style: solid;
    border-width: 2px;
    border-color: black;

    #tabs-container {
      grid-row: 1;
      display: flex;
    }

    .joke {
      grid-row: 2;
      min-height: 50vh;
      display: grid;
      place-items: center;
    }
  }
}
</style>
