import { defineStore } from "pinia";
import { SupplierService } from "@/services/supplier.service";
import type { SupplierModel } from "@/models/supplier.model";

export const SupplierStore = defineStore("supplier", {
  state: () => ({
    suppliers: [] as SupplierModel[],
  }),
  actions: {
    async getAllSupplier() {
      this.suppliers = await SupplierService.getAllSupplier();
    },
  },
});
