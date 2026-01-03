import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMenu } from '../context/MenuContext';
import { ChevronLeft } from 'lucide-react';

const IngredientDetail = () => {
    const { id } = useParams();
    const { dishes } = useMenu();
    
    const dish = dishes.find(d => d.id === parseInt(id));

    if (!dish) {
        return <div className="text-white p-8">Dish not found</div>;
    }

    // Mock ingredients data since API might not have it
    const ingredients = [
        { name: "Vegetables", quantity: "200g" },
        { name: "Spices", quantity: "10g" },
        { name: "Oil", quantity: "2 tbsp" },
        { name: "Salt", quantity: "to taste" },
        { name: "Special Sauce", quantity: "50ml" },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white font-sans">
             <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-800 p-4 z-50 flex items-center gap-4">
                <Link to="/" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <ChevronLeft className="w-6 h-6 text-white" />
                </Link>
                <h1 className="text-xl font-bold">Ingredients</h1>
            </header>

            <div className="pt-24 px-6 container mx-auto">
                <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 max-w-2xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                        <img 
                             src={dish.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                             alt={dish.name}
                             className="w-full md:w-48 h-48 object-cover rounded-lg bg-gray-700"
                        />
                        <div>
                            <h1 className="text-2xl font-bold mb-2">{dish.name}</h1>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {dish.description || "A delicious dish prepared with the finest ingredients."}
                            </p>
                            <div className="mt-4 text-blue-400 font-bold text-xl">${dish.price || "15.00"}</div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6">
                        <h2 className="text-lg font-bold mb-4">Ingredients</h2>
                        <div className="space-y-3">
                            {ingredients.map((ing, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                                    <span className="text-gray-300 font-medium">{ing.name}</span>
                                    <span className="text-gray-500 text-sm">{ing.quantity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientDetail;
