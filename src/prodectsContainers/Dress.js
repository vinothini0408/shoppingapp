import React, { useState } from "react";
import Dress1 from '../assets/dress1.jpg';
import Dress2 from '../assets/dress2.jpg';
import Dress3 from '../assets/dress3.jpg';
import Dress4 from '../assets/dress4.jpg';
import Dress5 from '../assets/dress5.jpg';
import Dress6 from '../assets/dress6.jpg';
import Dress7 from '../assets/dress7.jpg';
import Dress8 from '../assets/dress8.jpg';
import Dress9 from '../assets/dress9.jpg';
import Dress10 from '../assets/dress10.jpg';
import Dress11 from '../assets/dress11.jpg';
import Dress12 from '../assets/dress12.jpg';
import Dress13 from '../assets/dress13.jpg';
import Dress14 from '../assets/dress14.jpg';
import Dress15 from '../assets/dress15.jpg';
import Dress16 from '../assets/dress16.jpg';
import '../style.css';

const DressArray = [
  { img: Dress1, desc: "Red Cotton Anarkali Dress", rate: "M.R.P.: ₹1,499 -20%", del: "₹1,899" },
  { img: Dress2, desc: "Blue Casual Summer Dress", rate: "M.R.P.: ₹999 -15%", del: "₹1,199" },
  { img: Dress3, desc: "Floral Printed Maxi Dress", rate: "M.R.P.: ₹1,699 -25%", del: "₹2,299" },
  { img: Dress4, desc: "Black Party Wear Gown", rate: "M.R.P.: ₹2,299 -30%", del: "₹3,299" },
  { img: Dress5, desc: "Yellow A-line Frock", rate: "M.R.P.: ₹1,299 -18%", del: "₹1,599" },
  { img: Dress6, desc: "Pink Designer Lehenga", rate: "M.R.P.: ₹3,499 -22%", del: "₹4,499" },
  { img: Dress7, desc: "White Ethnic Kurti Set", rate: "M.R.P.: ₹1,799 -28%", del: "₹2,499" },
  { img: Dress8, desc: "Orange Casual Kurta", rate: "M.R.P.: ₹899 -10%", del: "₹999" },
  { img: Dress9, desc: "Green Long Skirt Set", rate: "M.R.P.: ₹1,599 -20%", del: "₹1,999" },
  { img: Dress10, desc: "Maroon Evening Dress", rate: "M.R.P.: ₹2,499 -35%", del: "₹3,799" },
  { img: Dress11, desc: "Navy Blue Party Dress", rate: "M.R.P.: ₹1,899 -15%", del: "₹2,199" },
  { img: Dress12, desc: "Traditional Silk Saree", rate: "M.R.P.: ₹4,999 -30%", del: "₹7,199" },
  { img: Dress13, desc: "Purple Embroidered Dress", rate: "M.R.P.: ₹2,099 -25%", del: "₹2,799" },
  { img: Dress14, desc: "Grey Office Wear Kurti", rate: "M.R.P.: ₹1,299 -20%", del: "₹1,599" },
  { img: Dress15, desc: "Multicolor Casual Dress", rate: "M.R.P.: ₹1,199 -12%", del: "₹1,359" },
  { img: Dress16, desc: "Baby Pink Layered Dress", rate: "M.R.P.: ₹1,599 -18%", del: "₹1,949" },
];

function Dress({ onAddToCart }) {
  const [addedIndex, setAddedIndex] = useState(null);

  const handleAdd = (item, index) => {
    onAddToCart(item);
    setAddedIndex(index);
    setTimeout(() => setAddedIndex(null), 3000);
  };

  return (
    <div className="mobile1">
      {DressArray.map((item, index) => (
        <div className="mob" key={index}>
          <img src={item.img} alt="dress" />
          <div className="des">{item.desc}</div>
          <div>{item.rate} <del>{item.del}</del></div>
          <br />
          <button className="cart" onClick={() => handleAdd(item, index)}>
            Add To Cart
          </button>
          {addedIndex === index && (
            <div className="cart-message">✅ Your dress is added to cart!</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dress;
