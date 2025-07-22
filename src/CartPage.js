import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={{
            border: '1px solid gray',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px'
          }}>
            <img src={item.img} alt="mobile" width={100} />
            <p>{item.desc}</p>
            <p>{item.rate} <del>{item.del}</del></p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
