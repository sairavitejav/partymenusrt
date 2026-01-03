import React from 'react';
import Header from '../components/Header';
import CategoryTabs from '../components/CategoryTabs';
import DishList from '../components/DishList';
import CartSummary from '../components/CartSummary';
import { Search } from 'lucide-react';
import { useMenu } from '../context/MenuContext';

const Home = () => {
    const { searchQuery, setSearchQuery } = useMenu();

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 pb-32 font-sans">
            <Header />
            
            <div className="pt-20"> {/* Offset for Fixed Header */}
                {/* Search Bar Section */}
                <div className="bg-gray-900 pt-2 px-4 pb-4 container mx-auto">
                    <div className="relative max-w-2xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for dishes, ingredients..."
                            className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <CategoryTabs />
                <DishList />
                <CartSummary />
            </div>
        </div>
    );
};

export default Home;
