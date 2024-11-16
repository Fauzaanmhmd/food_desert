import Image from 'next/image';
import { MenuItem } from "../data/types";

interface FoodDetailModalProps {
    isOpen: boolean;
    selectedItem: MenuItem | null;
    onClose: () => void;
}

const FoodDetailModal: React.FC<FoodDetailModalProps> = ({ isOpen, selectedItem, onClose}) => {
    if (!isOpen || !selectedItem) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-xs">
                <div className="flex flex-col items-center">
                    <Image
                        width={150}
                        height={150}
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="object-cover w-full h-48 sm:w-48 sm:h-48 rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-center">{selectedItem.name}</h2>
                    <p className="text-lg text-gray-600 text-center">{selectedItem.category}</p>
                    <p className="text-gray-800 font-bold text-xl mt-2 text-center">${selectedItem.price}</p>
                    <p className="text-gray-600 text-center mt-2">{selectedItem.description}</p>
                    <div className="mt-4">
                        <button
                            onClick={onClose}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailModal;
