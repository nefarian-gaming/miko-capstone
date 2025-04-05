// API Base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Types
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
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

// API Functions
export const api = {
  // Product endpoints
  async getProducts(category?: string): Promise<Product[]> {
    const url = category
      ? `${API_URL}/api/products?category=${encodeURIComponent(category)}`
      : `${API_URL}/api/products`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    return response.json();
  },

  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_URL}/api/products/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    return response.json();
  },

  // Auth endpoints
  async register(username: string, email: string, password: string): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return response.json();
  },

  async login(email: string, password: string): Promise<User> {
    const response = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return response.json();
  },

  // Order endpoints
  async createOrder(order: Order): Promise<{ message: string, order_id: number }> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authentication required');
    }

    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(order)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create order');
    }

    return response.json();
  }
};

export default api;