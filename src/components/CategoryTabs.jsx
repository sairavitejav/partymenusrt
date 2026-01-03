import React from 'react';
import { useMenu } from '../context/MenuContext';

const CategoryTabs = () => {
    const { activeCategory, setActiveCategory, dishes, cart } = useMenu();

    // Requirement: Four meal types: Starter, Main Course, Dessert, Classic
    // We need to match these to the API values exactly or map them.
    // Based on "mealType": "MAIN COURSE", we likely have "STARTER", "DESSERT", etc.
    const CATEGORIES = ["Starters", "Main Course", "Desserts", "Classic"];
    
    // Helper to get count for a category tab
    const getCount = (cat) => {
        // We filter dishes that match this category
        // Then sum their quantities in cart
        // But the requirement says "Show the count of selected dishes in each category tab".
        // This implies count of ADDED items.
        
        // Wait, current API mapping logic in Context needs to match these strings.
        // If API has "STARTER", "MAIN COURSE", "DESSERT".
        // We need to ensure we pass the correct string to logic.
        
        return dishes
            .filter(d => {
                // Normalize API type to Tab name
                // This logic mirrors Context's getDishCategory closely or we move it to Context
                const type = d.courseType || d.mealType || "";
                // Simple mapping attempt:
                if (cat === "Starters" && (type === "STARTER" || type === "Starters")) return true;
                if (cat === "Main Course" && type === "MAIN COURSE") return true;
                if (cat === "Desserts" && (type === "DESSERT" || type === "Desserts")) return true;
                if (cat === "Classic" && (type === "CLASSIC" || type === "Classic")) return true;
                return false;
            })
            .reduce((acc, dish) => acc + (cart[dish.id] || 0), 0);
    };

    return (
        <div className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40 overflow-x-auto no-scrollbar">
            <div className="flex px-4 gap-6 container mx-auto">
                {CATEGORIES.map(cat => {
                    const isActive = activeCategory === cat;
                    const count = getCount(cat);
                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`py-4 px-2 relative font-medium text-sm whitespace-nowrap transition-colors
                                ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}
                            `}
                        >
                            {cat}
                            {count > 0 && (
                                <span className="ml-2 bg-gray-700 text-white text-[10px] px-1.5 py-0.5 rounded-full ring-1 ring-gray-900">
                                    {count}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryTabs;
