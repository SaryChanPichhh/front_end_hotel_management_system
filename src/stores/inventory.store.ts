import { defineStore } from "pinia";
import type { InventoryModel } from "@/models/inventory_model";
import { InventoryService } from "@/services/inventory.service";
import { InventoryStatus } from "@/utils/inventory.enum";
export const useInventoryStore = defineStore("inventory", {
  state: () => ({
    inventories: [] as InventoryModel[],
  }),
  getters: {},
  actions: {
    initData() {
      this.inventories = InventoryService.getAllInventory();
    },
    changeStockInKhmer(status: string) {
      if (status === InventoryStatus.OutOfStock) {
        return "ស្តុកអស់";
      } else if (status === InventoryStatus.InStock) {
        return "ស្តុកនៅសល់";
      }
    },
    generateAutoCode() {
      return "ST1-IN00021";
    },
  },
});
