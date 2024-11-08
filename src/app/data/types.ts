export interface MenuItem {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    price: number;
  }
  
  export interface OrderItem extends MenuItem {
    quantity: number;
  }