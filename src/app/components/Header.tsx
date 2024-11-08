import React from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-center w-full mb-4">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          className="w-full max-w-3xl p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="bg-blue-100 p-4 items-center rounded-lg text-center mb-4">
            <h2 className="text-2xl font-bold text-red-500">Get dessert FOR FREE!</h2>
            <p className="text-gray-600 font-bold">Make your first order for <span className="text-red-500">$50</span> and get dessert from our bakery for free!</p>
      </div>
    </div>
  );
};

export default Header;
