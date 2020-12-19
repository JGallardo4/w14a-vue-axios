import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    joke: "generate joke",
  },

  getters: {
    getJoke(state) {
      return state.joke;
    },
  },

  mutations: {
    SET_NEW_JOKE(state, payload) {
      state.joke = payload;
    },
  },

  actions: {
    getNewJoke(context) {
      axios
        .get("https://geek-jokes.sameerkumar.website/api?format=json")
        .then((response) => {
          context.commit("SET_NEW_JOKE", response.data.joke);
        });

      return this.getters.getJoke;
    },
  },
});

new Vue({
  render: (h) => h(App),
  axios: axios,
  store: store,
}).$mount("#app");
