import Vue from "vue";
import Vuex from "vuex";

Vue.useAttrs(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutation: {
    increment(state, amount) {
      state.count += amount;
    },
  },
});

console.log(store.state.count);

store.commit("increment", 1);

console.log(store.state.count);
