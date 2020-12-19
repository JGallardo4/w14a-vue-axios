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

      <component v-bind:is="currentTabComponent" class="joke">
        <p>
          {{ joke }}
        </p>
      </component>
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
    joke() {
      return this.$store.getters.getJoke;
    },

    currentTabComponent() {
      return this.currentTab
        .toLowerCase()
        .split(" ")
        .join("-");
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin resetButton() {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

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
    border-width: 1px;
    border-color: black;
    gap: 1rem;

    #tabs-container {
      grid-row: 1;
      display: flex;
      border-bottom: solid 1px black;
      button {
        @include resetButton;
        padding: 1rem;
        border-right: solid 1px black;

        &:hover {
          background-color: gainsboro;
        }

        &.active {
          background-color: lightblue;
        }
      }
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
