"use client"; // This is a client component 👈🏽
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import RestaurantList from "../app/components/RestaurantList";
import CategoryFilter from "./components/CategoryFilter";
import OrderSummary from "../app/components/OrderSummary";
import ConfirmationModal from "../app/components/ConfirmationModal";
import { useState } from "react";
import { MenuItem, OrderItem } from "../app/data/types";
import menuItems from "../app/data/menuItems";

export default function Home() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);

  const categories = Array.from(new Set(menuItems.map((item) => item.category)));

  const handleAddToOrder = (item: MenuItem) => {
    setOrderItems((prevOrder) => {
      const existingItem = prevOrder.find((orderItem) => orderItem.id === item.id);
      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromOrder = (itemId: number) => {
    setOrderItems((prevOrder) => prevOrder.filter((orderItem) => orderItem.id !== itemId));
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSubmitOrder = () => {
    setIsOrderSubmitted(true);
    setOrderItems([]);
  };

  const closeModal = () => {
    console.log("Closing modal...");
    setIsOrderSubmitted(false);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen">
        <Sidebar />    
      <div className="flex flex-col flex-grow p-4 bg-gray-100 md:flex-row md:justify-between">
        <div className="flex-grow">
          <Header onSearch={handleSearch} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          <RestaurantList items={filteredItems} onAddToOrder={handleAddToOrder} />
          
          <div className="mt-4 md:hidden">
            <OrderSummary 
              username="Fauzan Muhammad" 
              location="6313 Elgin, Australia" 
              orderItems={orderItems} 
              onRemoveItem={handleRemoveFromOrder} 
              onSubmit={handleSubmitOrder} 
            />
          </div>
        </div>
        
        <div className="hidden w-1/4 p-4 md:block">
          <OrderSummary 
            username="Fauzan Muhammad" 
            location="6313 Elgin, Australia" 
            orderItems={orderItems} 
            onRemoveItem={handleRemoveFromOrder} 
            onSubmit={handleSubmitOrder} 
          />
        </div>
      </div>

      {isOrderSubmitted && (
        <ConfirmationModal onClose={closeModal} />
      )}
    </div>
  );
}
