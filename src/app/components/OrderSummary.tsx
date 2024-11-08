import { OrderItem } from "../data/types";

interface OrderSummaryProps {
  orderItems: OrderItem[];
  onRemoveItem: (itemId: number) => void;
  onSubmit: () => void
  username: string;
  location: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderItems, onRemoveItem, onSubmit, username, location }) => {
  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-8">
        <p className="font-semibold">{username}</p>
        <span>•</span>
        <p className="text-gray-600">{location}</p>
      </div>
      <h2 className="font-bold mb-4">My Order</h2>
      {orderItems.length === 0 ? (
        <p className="text-gray-500">No items in order.</p>
      ) : (
        <ul>
          {orderItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-800 font-bold">${item.price * item.quantity}</p>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
      <hr className="my-4" />
      <div className="flex justify-between font-bold">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      <button
        onClick={onSubmit}
        className={`mt-4 w-full bg-red-400 px-4 py-2 rounded-lg text-white ${orderItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'
          }`}
        disabled={orderItems.length === 0} // Disable button if no items in order
      >
        Submit Order
      </button>
    </div>
  );
};

export default OrderSummary;
