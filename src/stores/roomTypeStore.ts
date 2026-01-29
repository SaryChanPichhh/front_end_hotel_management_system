import { defineStore } from "pinia";
import type { RoomTypeModel } from "@/models/roomType_model";

export const useRoomTypeStore = defineStore("roomType", {
  state: () => ({
    roomTypes: [] as RoomTypeModel[],
    isActive: false,
    roomTypeCode: "",
  }),
  getters: {},
  actions: {
    isRoomTypeActive(isActive: boolean) {
      return isActive ? "សកម្ម" : "អសកម្ម";
    },
    generateAutoCode() {
      return "ST1-RT0001";
    },
    initData() {
      this.roomTypes = [
        {
          DbCode: "ST1",
          RoomTypeCode: "RT-000001",
          RoomTypeName: "TWO-BAD",
          RoomTypeDesc: "ទីតាំងទីពីរបន្ទប់",
          RoomTypeStatus: true,
          CreatedBy: "admin",
          CreatedAt: new Date(),
          UpdatedBy: "admin",
          UpdatdedAt: new Date(),
        },
      ];
    },
  },
});
