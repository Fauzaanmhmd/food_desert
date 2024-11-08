import React from 'react';

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

  return (
    <div className="flex flex-wrap items-center justify-center space-x-2 mb-4">
      <button
        onClick={() => onSelectCategory("")}
        className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow ${selectedCategory === "" ? 'bg-red-200 text-red-600' : 'bg-gray-100 text-gray-700'
          } hover:bg-red-100 transition-all duration-300 ease-in-out`}
      >
        All
      </button>
      {categories.map((icon) => (
        <button
          key={icon}
          onClick={() => onSelectCategory(icon)}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow ${selectedCategory === icon ? 'bg-red-200 text-red-600' : 'bg-gray-100 text-gray-700'
            } hover:bg-red-100 transition-all duration-300 ease-in-out`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
