import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useMenu } from '../context/MenuContext';

const Header = () => {
    const { getCartCount } = useMenu();
    
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                     {/* Back arrow placeholder if needed, though requirements say "No navigation needed" for some parts, 
                         but "Party Menu" usually implies a flow. Detailed screen has back button. 
                         Home screen logic: */}
                    <h1 className="text-xl font-bold">Party Menu</h1>
                </div>
                
                {/* 
                   Requirement says: "Display a Continue button (no navigation needed after that)."
                   This likely refers to the bottom summary.
                   
                   Header requirements:
                   - "A search bar must be available at the top" -> Actually search bar might be separate or inside header.
                   - "Dish Selection Summary" -> "Display a Continue button".
                   
                   Let's keep Header simple: Title + Cart Icon (optional but good for UX).
                */}
                <div className="relative">
                    <ShoppingCart className="w-6 h-6 text-gray-300" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                        {getCartCount()}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
