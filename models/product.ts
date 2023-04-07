export interface ProductType {
  id?: string | number;
  title: string;
  description: string;
  original_price: number;
  price: number;
  images?: string[];
  quantity: number;
  quantity_sold: number;
  seller: SellerType;
  categories: CategoryType[];
}

export interface SellerType {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
}

export interface CategoryType {
  id: number;
  name: string;
}
