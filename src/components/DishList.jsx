import React from 'react';
import DishCard from './DishCard';
import { useMenu } from '../context/MenuContext';

const DishList = () => {
    const { dishes, activeCategory, searchQuery, loading } = useMenu();

    if (loading) {
        return <div className="text-white text-center py-20">Loading dishes...</div>;
    }

    // Filter dishes based on Category and Search
    const filteredDishes = dishes.filter(dish => {
        // Category Filter
        // We need to match the "activeCategory" (Tab Name) to the dish data
        const type = dish.courseType || dish.mealType || "";
        
        let matchesCategory = false;
        if (activeCategory === "Starters") matchesCategory = (type === "STARTER" || type === "Starters");
        else if (activeCategory === "Main Course") matchesCategory = (type === "MAIN COURSE");
        else if (activeCategory === "Desserts") matchesCategory = (type === "DESSERT" || type === "Desserts");
        else if (activeCategory === "Classic") matchesCategory = (type === "CLASSIC" || type === "Classic");
        else matchesCategory = true; // Should not happen given hardcoded tabs

        // Search Filter
        const query = searchQuery.toLowerCase();
        const matchesSearch = dish.name.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    if (filteredDishes.length === 0) {
        return (
            <div className="text-gray-400 text-center py-20">
                <p>No dishes found for this category.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDishes.map(dish => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </div>
    );
};

export default DishList;
