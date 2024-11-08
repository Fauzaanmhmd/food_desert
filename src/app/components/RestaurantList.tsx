import { MenuItem } from "../data/types";

interface RestaurantListProps {
    items: MenuItem[];
    onAddToOrder: (item: MenuItem) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ items, onAddToOrder }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-48 rounded-lg mb-2" />
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-800 font-bold">${item.price}</p>
                    <button
                        onClick={() => onAddToOrder(item)}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Add to Order
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RestaurantList;
