import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", {
  state: () => ({
    first_name: "",
    last_name: "",
    image: "",
  }),
  getters: {
    fullName: (state) => state.first_name + " " + state.last_name,
  },
  actions: {
    initData() {
      this.first_name = "Sary";
      this.last_name = "ChanPich";
    },
  },
});
