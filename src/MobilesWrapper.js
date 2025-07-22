import React, { useContext } from 'react';
import Mobiles from './prodectsContainers/mobile';
import { CartContext } from './context/CartContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';




function MobilesWrapper() {
  const { addToCart } = useContext(CartContext);
const location = useLocation();
  return <Mobiles onAddToCart={addToCart} />;
}

export default MobilesWrapper;
