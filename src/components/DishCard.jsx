import React, { useState } from 'react';
import { useMenu } from '../context/MenuContext';
import { Link } from 'react-router-dom';

const DishCard = ({ dish }) => {
    const { cart, addToCart, removeFromCart } = useMenu();
    const [isExpanded, setIsExpanded] = useState(false);
    
    const quantity = cart[dish.id] || 0;
    
    // Mock description if missing, or use actual
    const description = dish.description || "No description available.";
    const shortDesc = description.slice(0, 60) + "..."; // Simple truncation
    
    return (
        <div className="bg-gray-800 rounded-xl p-4 flex flex-col gap-4 shadow-lg border border-gray-700 relative overflow-hidden">
            {quantity > 0 && (
                 <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl-lg font-bold">
                     Added to Menu
                 </div>
            )}
            
            <div className="flex gap-4">
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="text-white font-bold text-lg mb-1">{dish.name}</h3>
                        <span className="text-blue-400 font-bold">${dish.price || "15.00"}</span>
                    </div>
                    
                    {/* Tags or Calories mock */}
                    <div className="text-gray-500 text-xs mb-2 flex gap-2">
                        {dish.type === "VEG" ? <span className="text-green-500 border border-green-500 px-1 rounded">V</span> : <span className="text-red-500 border border-red-500 px-1 rounded">NV</span>}
                        <span>{dish.calories || "320"} kcal</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-2 leading-relaxed">
                        {isExpanded ? description : shortDesc}
                    </p>
                    
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-blue-400 text-xs font-semibold hover:underline mb-4"
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    
                    <div className="flex justify-between items-center mt-auto">
                        <Link 
                            to={`/dish/${dish.id}`}
                            className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                        >
                            Ingredients
                        </Link>

                        <div className="flex items-center gap-2">
                            {quantity > 0 ? (
                                <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
                                    <button 
                                        onClick={() => removeFromCart(dish.id)}
                                        className="px-3 py-1.5 text-white hover:bg-gray-600 text-sm"
                                    >
                                        -
                                    </button>
                                    <span className="px-2 text-white font-bold text-sm">{quantity}</span>
                                    <button 
                                        onClick={() => addToCart(dish.id)}
                                        className="px-3 py-1.5 text-white hover:bg-gray-600 text-sm"
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button 
                                    onClick={() => addToCart(dish.id)}
                                    className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all"
                                >
                                    Add +
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                    <img 
                        src={dish.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} 
                        alt={dish.name}
                        className="w-full h-full object-cover rounded-lg bg-gray-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default DishCard;
