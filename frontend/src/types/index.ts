export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type User = {
  id: number;
  username: string;
  token: string;
};

export type OrderItem = {
  product_id: number;
  quantity: number;
  price: number;
};

export type Order = {
  user_id: number;
  total_amount: number;
  items: OrderItem[];
};