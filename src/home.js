// ✅ Full home.js (with proper dropdown outside input)
import React, { useState, useContext } from 'react';
import './style.css';
import Image1 from './assets/logo.jpg';
import Mobile from './assets/mobile.jpg';
import Dress from './assets/Dress.jpg';
import { Link } from 'react-router-dom';
import { allProducts } from './data/products';
import { CartContext } from './context/CartContext';
import { useNavigate } from 'react-router-dom';


function Home() {
  const { cartItems, addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const filtered = allProducts.filter((item) =>
    item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      addToCart(filtered[activeIndex]);
      setSearchTerm('');
      setIsFocused(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="input-box">
        <img className="logo" src={Image1} alt="logo" width={100} />

        {/* Search bar and dropdown */}
        <div className="search-area">
          <div className="search-wrapper">
            <input
              type="text"
              className="box"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveIndex(-1);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={handleKeyDown}
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {isFocused && searchTerm && (
            <div className="dropdown">
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <div
                    key={index}
                    className={`dropdown-item ${index === activeIndex ? 'active' : ''}`}
                   onClick={() => {
                   navigate(`/${item.category}`, { state: { scrollTo: item.name } });
                   setSearchTerm('');
                   setIsFocused(false);
                  }}
                  >
                    <img src={item.img} alt={item.name} className="dropdown-img" />
                    <div>
                      <strong>{item.name}</strong><br />
                      <small>{item.rate} <del>{item.del}</del></small>
                    </div>
                  </div>
                ))
              ) : (
                <div className="dropdown-item">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* Cart icon */}
        <div className="button">
          <Link to="/cart">
            <button className="cart-button">
              <i className="fas fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </button>
          </Link>
        </div>
      </div>

      {/* Product category images */}
      <div className="prodect-container">
        <Link to="/mobiles">
          <img src={Mobile} alt="mobiles" />
        </Link>
        <Link to="/dress">
          <img src={Dress} alt="dress" />
        </Link>
      </div>
    </div>
  );
}

export default Home;