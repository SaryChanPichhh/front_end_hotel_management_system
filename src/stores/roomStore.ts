import { defineStore } from "pinia";
import { ref } from "vue";
import type { RoomModel } from "@/models/room_model";

export const useRoomStore = defineStore("room", {
  state: () => ({
    rooms: [] as RoomModel[],
    isActive: false,
  }),
  getters: {},
  actions: {
    isRoomActive(isActive: boolean) {
      return isActive ? "សកម្ម" : "អសកម្ម";
    },
    initData() {
      this.rooms = [
        {
          HOTEL_ID: "ST1",
          HOTEL_NAME: "SETEC INSTITUTE",
          ROOM_ID: "14-RM-000001",
          ROOM_TYPE_ID: "RT-000001",
          ROOM_TYPE: "TWO-BAD",
          ROOM_NO: "001",
          FLOOR: "1",
          WING: "WING",
          STATUS: "AVAILABLE",
          IS_ACTIVE: true,
        },
        {
          HOTEL_ID: "ST1",
          HOTEL_NAME: "SETEC INSTITUTE",
          ROOM_ID: "14-RM-000001",
          ROOM_TYPE_ID: "RT-000001",
          ROOM_TYPE: "TWO-BAD",
          ROOM_NO: "001",
          FLOOR: "1",
          WING: "WING",
          STATUS: "AVAILABLE",
          IS_ACTIVE: false,
        },
        {
          HOTEL_ID: "ST1",
          HOTEL_NAME: "SETEC INSTITUTE",
          ROOM_ID: "14-RM-000001",
          ROOM_TYPE_ID: "RT-000001",
          ROOM_TYPE: "TWO-BAD",
          ROOM_NO: "001",
          FLOOR: "1",
          WING: "WING",
          STATUS: "AVAILABLE",
          IS_ACTIVE: true,
        },
        {
          HOTEL_ID: "ST1",
          HOTEL_NAME: "SETEC INSTITUTE",
          ROOM_ID: "14-RM-000001",
          ROOM_TYPE_ID: "RT-000001",
          ROOM_TYPE: "TWO-BAD",
          ROOM_NO: "001",
          FLOOR: "1",
          WING: "WING",
          STATUS: "AVAILABLE",
          IS_ACTIVE: false,
        },
      ];
    },
  },
});
