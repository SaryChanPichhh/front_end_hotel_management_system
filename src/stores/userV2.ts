import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useUserStoreV2 = defineStore("userV2", () => {
  const state = reactive({
    first_name: "",
    last_name: "",
    image: "",
  });

  const fullName = computed(() => state.first_name + " " + state.last_name);

  function initData() {
    state.first_name = "Sary";
    state.last_name = "ChanPichson";
  }

  return { state, fullName, initData };
});
