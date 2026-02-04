import type { CustomerModel } from "@/models/customer.model";

export const CustomerService = {
  async getCustomers() {
    return Array.from({ length: 40 }, (_, index) => {
      const id = index + 1;
      return {
        CustomerCode: `ST1-CUS-2502${id.toString().padStart(5, "0")}`,
        CustomerName: `Customer ${id}`,
        Password: "123456",
        Phone: `09${Math.floor(Math.random() * 90000000)
          .toString()
          .padStart(8, "0")}`,
        Email: `customer${id}@example.com`,
        Address: `#${id}, Street ${Math.floor(Math.random() * 100) + 1}, Phnom Penh`,
        Status: Math.random() > 0.1, // 90% chance of being active
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      };
    });
  },
};
