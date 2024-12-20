import React from "react";
import { useNavigate } from "react-router-dom";

const OrderFormModal = ({ tableId, setTableId, confirmOrder, closeModal }) => {
    const navigate = useNavigate()

    const handleOrderComplete = (e)=>{
        e.preventDefault();
        confirmOrder()
        navigate('/')
    }
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50  px-12 sm:px-14 md:px-10 lg:px-0">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Confirm Order</h2>
                <form
                    onSubmit={handleOrderComplete}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Table ID:
                        </label>
                        <input
                            type="text"
                            value={tableId}
                            onChange={(e) => setTableId(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter table ID"
                            required
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                        >
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderFormModal;
