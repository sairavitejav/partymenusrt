import React from 'react';
import { useMenu } from '../context/MenuContext';
import { ArrowRight } from 'lucide-react';

const CartSummary = () => {
    const { getCartCount, cart, dishes } = useMenu();
    const count = getCartCount();

    // Calculate total if prices were real numbers in data, but API might have strings.
    // Let's assume price is available or mock it.
    // If dish.price is string "$15.00", we parse it.
    const total = Object.entries(cart).reduce((acc, [id, qty]) => {
        const dish = dishes.find(d => d.id === parseInt(id));
        if (!dish) return acc;
        const price = parseFloat((dish.price + "").replace(/[^0-9.]/g, '')) || 15.00; // Mock default 15 if missing
        return acc + (price * qty);
    }, 0);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 p-4 z-50">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex gap-8 text-sm">
                    <div>
                        <p className="text-gray-400 uppercase text-xs font-bold tracking-wider">Selected Items</p>
                        <p className="text-white text-xl font-bold">{count} <span className="text-gray-500 text-sm font-normal">dishes</span></p>
                    </div>
                    <div>
                        <p className="text-gray-400 uppercase text-xs font-bold tracking-wider">Total Estimated</p>
                        <p className="text-white text-xl font-bold">${total.toFixed(2)}</p>
                    </div>
                </div>

                <div className="flex gap-4 w-full sm:w-auto">
                    {/* Save as Draft (Visual Only) */}
                    <button className="flex-1 sm:flex-none px-6 py-3 bg-gray-800 text-white font-bold rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
                        Save as Draft
                    </button>
                    {/* Review Order (Requirement: Continue button, no nav needed after) */}
                    <button className="flex-1 sm:flex-none px-8 py-3 bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
                        Review Order <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
