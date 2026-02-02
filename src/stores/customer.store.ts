import { defineStore } from "pinia";
import type { CustomerModel } from "@/models/customer.model";
import { CustomerService } from "@/services/customer.service";
export const useCustomerStore = defineStore("customer", {
  state: () => ({
    customers: [] as CustomerModel[],
  }),
  actions: {
    async getCustomers() {
      this.customers = await CustomerService.getCustomers();
    },
    generateAutoCode() {
      const lastCustomer = this.customers[this.customers.length - 1];
      if (!lastCustomer) {
        return "ST1-CUS-250200001";
      }
      const lastCode = lastCustomer.CustomerCode;
      const lastNumber = parseInt(lastCode.split("-")[3] || "0");
      const newNumber = lastNumber + 1;
      return `ST1-CUS-2502${newNumber.toString().padStart(5, "0")}`;
    },
  },
});
