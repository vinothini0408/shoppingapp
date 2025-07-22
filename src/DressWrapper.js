import React, { useContext } from 'react';
import Dress from './prodectsContainers/Dress';
import { CartContext } from './context/CartContext';

function DressWrapper() {
  const { addToCart } = useContext(CartContext);
  return <Dress onAddToCart={addToCart} />;
}

export default DressWrapper;
