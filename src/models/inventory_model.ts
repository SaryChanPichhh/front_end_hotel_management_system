export interface InventoryModel {
  code: string;
  name: string;
  decscription: string;
  quantity: number;
  price: number;
  total_price: number;
  image: string;
  category: string;
  supplier: string;
  date: string;
  status: string;
  created_by: string;
  created_at: Date;
  updated_by: string;
  updated_at: Date;
}
