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
import FoodDetailModal from "./components/FoodDetailModal";

export default function Home() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null); // State untuk item yang dipilih

  const categories = [...new Set(menuItems.map(item => item.category))];

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
    setIsOrderSubmitted(false);
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow p-4 md:flex md:justify-between md:p-6">
        <div className="flex-grow">
          <Header onSearch={handleSearch} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          <RestaurantList items={filteredItems} onAddToOrder={handleAddToOrder} openModal={openModal} />
        </div>

        <div className="mt-4 md:mt-0 md:w-1/4 p-4 md:block flex-shrink-0">
          <OrderSummary
            username="Fauzan Muhammad"
            location="6313 Elgin, Australia"
            orderItems={orderItems}
            onRemoveItem={handleRemoveFromOrder}
            onSubmit={handleSubmitOrder}
          />
        </div>
      </div>

      <FoodDetailModal
        isOpen={isModalOpen}
        selectedItem={selectedItem}
        onClose={closeModal}
      />

      {isOrderSubmitted && (
        <ConfirmationModal onClose={closeModal} />
      )}
    </div>
  );
}


