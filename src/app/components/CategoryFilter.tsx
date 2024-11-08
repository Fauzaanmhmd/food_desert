import React from 'react';
import { FaList, FaHamburger } from "react-icons/fa";
import { TbPizza } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {

  const categoryIcons: { [key: string]: React.ReactNode } = {
    Italian: <TbPizza />,
    Asian: <PiBowlFoodFill />,
    FastFood: <FaHamburger />,
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:justify-center md:space-x-2 mb-4">
      <button
        onClick={() => onSelectCategory("")}
        className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold shadow ${selectedCategory === "" ? 'bg-red-200 text-red-600' : 'bg-gray-100 text-gray-700'
          } hover:bg-red-100 transition-all duration-300 ease-in-out`}
      >
        <span className="mr-2"><FaList /></span>
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold shadow ${selectedCategory === category ? 'bg-red-200 text-red-600' : 'bg-gray-100 text-gray-700'
            } hover:bg-red-100 transition-all duration-300 ease-in-out`}
        >
          {categoryIcons[category] && <span className="mr-2">{categoryIcons[category]}</span>}
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

