import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  // store lifecycle ::::: state as properties , getter as computed , action as function
  const state = reactive({ counter: 0 });
  const double = computed(() => state.counter * 2);

  function increase() {
    state.counter++;
  }

  return { state, double, increase };
});
