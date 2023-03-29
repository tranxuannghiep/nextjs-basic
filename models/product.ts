export interface ProductType {
  id?: string;
  title: string;
  description: string;
  original_price: number;
  price: number;
  images?: string[];
  quantity: number;
  quantity_sold: number;
}
