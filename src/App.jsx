import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IngredientDetail from './pages/IngredientDetail';
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <Router>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dish/:id" element={<IngredientDetail />} />
        </Routes>
      </MenuProvider>
    </Router>
  );
}

export default App;
