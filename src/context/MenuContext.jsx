import React, { createContext, useContext, useState, useEffect } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

// RICH MOCK DATA
const MOCK_DATA = [
  // --- STARTERS ---
  {
    id: 101,
    name: "Crispy Calamari",
    description: "Golden fried squid rings served with spicy marinara sauce and lemon wedges.",
    price: "12.50",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2940&auto=format&fit=crop",
    type: "NV",
    calories: "450",
    courseType: "Starters"
  },
  {
    id: 102,
    name: "Bruschetta Trio",
    description: "Toasted baguette slices topped with tomato-basil, olive tapenade, and roasted garlic mushrooms.",
    price: "9.00",
    image: "https://images.unsplash.com/photo-1572695157363-bc3195019877?q=80&w=2940&auto=format&fit=crop",
    type: "VEG",
    calories: "280",
    courseType: "Starters"
  },
  {
    id: 103,
    name: "Chicken Satay",
    description: "Grilled chicken skewers marinated in turmeric and lemongrass, served with peanut dip.",
    price: "11.00",
    image: "https://images.unsplash.com/photo-1533038676649-16812879baa1?q=80&w=2787&auto=format&fit=crop",
    type: "NV",
    calories: "320",
    courseType: "Starters"
  },
  {
    id: 104,
    name: "Stuffed Mushrooms",
    description: "Baked button mushrooms filled with cream cheese, herbs, and breadcrumbs.",
    price: "10.50",
    image: "https://images.unsplash.com/photo-1634526976694-82247c430e66?q=80&w=2835&auto=format&fit=crop",
    type: "VEG",
    calories: "210",
    courseType: "Starters"
  },

  // --- MAIN COURSE ---
  {
    id: 201,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice slow-cooked with white wine and finished with premium truffle oil and parmesan.",
    price: "18.50",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2940&auto=format&fit=crop",
    type: "VEG",
    calories: "450",
    courseType: "MAIN COURSE"
  },
  {
    id: 202,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon fillet grilled to perfection with a lemon herb butter sauce.",
    price: "24.00",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=2864&auto=format&fit=crop",
    type: "NV",
    calories: "320",
    courseType: "MAIN COURSE"
  },
  {
    id: 203,
    name: "Pasta Primavera",
    description: "Fresh pasta tossed with seasonal spring vegetables in a light garlic olive oil sauce.",
    price: "17.00",
    image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=2787&auto=format&fit=crop",
    type: "VEG",
    calories: "400",
    courseType: "MAIN COURSE"
  },
  {
    id: 204,
    name: "Beef Stir Fry",
    description: "Tender beef strips wok-fried with crisp colorful vegetables in a savory ginger soy sauce.",
    price: "21.00",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb74b?q=80&w=2850&auto=format&fit=crop",
    type: "NV",
    calories: "480",
    courseType: "MAIN COURSE"
  },
  {
    id: 205,
    name: "Chicken Tikka Masala",
    description: "Roasted marinated chicken chunks in a spiced curry sauce. A classic favorite.",
    price: "19.50",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2871&auto=format&fit=crop",
    type: "NV",
    calories: "550",
    courseType: "MAIN COURSE"
  },
   {
    id: 206,
    name: "Margherita Pizza",
    description: "Classic pizza with San Marzano tomato sauce, fresh mozzarella cheese, basil, and olive oil.",
    price: "16.00",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2938&auto=format&fit=crop",
    type: "VEG",
    calories: "600",
    courseType: "MAIN COURSE"
  },

  // --- DESSERTS ---
  {
    id: 301,
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a molten center, served warm with vanilla ice cream.",
    price: "9.50",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2940&auto=format&fit=crop",
    type: "VEG",
    calories: "450",
    courseType: "Desserts"
  },
  {
    id: 302,
    name: "New York Cheesecake",
    description: "Classic creamy cheesecake on a graham cracker crust with a berry compote.",
    price: "8.50",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=2940&auto=format&fit=crop",
    type: "VEG",
    calories: "400",
    courseType: "Desserts"
  },
  {
    id: 303,
    name: "Tiramisu",
    description: "Italian dessert made of savoyardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese.",
    price: "9.00",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=2960&auto=format&fit=crop",
    type: "VEG",
    calories: "380",
    courseType: "Desserts"
  },

  // --- CLASSIC ---
  {
    id: 401,
    name: "Club Sandwich",
    description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayonnaise.",
    price: "14.50",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2946&auto=format&fit=crop",
    type: "NV",
    calories: "550",
    courseType: "Classic"
  },
  {
    id: 402,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
    price: "13.00",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2940&auto=format&fit=crop",
    type: "VEG",
    calories: "350",
    courseType: "Classic"
  },
  {
    id: 403,
    name: "Fish and Chips",
    description: "Battered and fried fish served with french fries and tartar sauce.",
    price: "17.50",
    image: "https://images.unsplash.com/photo-1579208575657-c522718a1adc?q=80&w=2835&auto=format&fit=crop",
    type: "NV",
    calories: "700",
    courseType: "Classic"
  }
];

export const MenuProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState({}); // { dishId: quantity }
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch with local data
    setTimeout(() => {
      setDishes(MOCK_DATA);
      setLoading(false);
    }, 500); // Small delay to show loading state if needed
  }, []);

  const addToCart = (dishId) => {
    setCart(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1
    }));
  };

  const removeFromCart = (dishId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[dishId] > 1) {
        newCart[dishId] -= 1;
      } else {
        delete newCart[dishId];
      }
      return newCart;
    });
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  };
    
  return (
    <MenuContext.Provider value={{
      dishes,
      cart,
      addToCart,
      removeFromCart,
      activeCategory,
      setActiveCategory,
      searchQuery,
      setSearchQuery,
      getCartCount,
      loading
    }}>
      {children}
    </MenuContext.Provider>
  );
};
