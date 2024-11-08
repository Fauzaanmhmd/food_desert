import React from 'react';

interface ConfirmationModalProps {
    onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-semibold mb-4">Order Submitted!</h2>
                <p className="text-gray-600 mb-4">Your order has been successfully placed.</p>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ConfirmationModal;
