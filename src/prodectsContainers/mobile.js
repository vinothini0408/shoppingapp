import React, { useState } from "react";
import Mobile1 from '../assets/mobile1.jpg'
import Mobile2 from '../assets/mobile2.jpg'
import Mobile3 from '../assets/mobile3.jpg'
import Mobile4 from '../assets/mobile4.jpg'
import Mobile5 from '../assets/mobile5.jpg'
import Mobile6 from '../assets/mobile6.jpg'
import Mobile7 from '../assets/mobile7.jpg'
import Mobile8 from '../assets/mobile8.jpg'
import Mobile9 from '../assets/mobile9.jpg'
import Mobile10 from '../assets/mobile10.jpg'
import Mobile11 from '../assets/mobile11.jpg'
import Mobile12 from '../assets/mobile12.jpg'
import { useLocation } from 'react-router-dom';
import '../style.css';

const MobileArray = [
    {
        name: "iPhone 16 Pro",
        category: "mobiles",
        img: Mobile1,
        desc: "iPhone 16 Pro 128 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium",
        rate: "M.R.P.: ₹1,12,900 -6%",
        del: "₹1,19,900"
      },
      {
        name: "Samsung Galaxy S24",
        category: "mobiles",
        img: Mobile2,
        desc: "Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI (Titanium Black, 12GB, 512GB Storage), Snapdragon 8 Gen 3, 200 MP Camera with ProVisual Engine and 5000mAh Battery",
        rate: "M.R.P.: ₹97,420 -33%",
        del: "₹1,44,999"
      },
      {
        name: "iPhone 16 Pro Max",
        category: "mobiles",
        img: Mobile3,
        desc: "iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Natural Titanium",
        rate: "M.R.P.: ₹1,34,900 -7%",
        del: "₹1,44,900"
      },
      {
        name: "Lava Bold N1 Pro",
        category: "mobiles",
        img: Mobile4,
        desc: "Lava Bold N1 Pro (Stealth Black, 4 GB RAM, 128 GB Storage)| Bigger 6.67 HD+ IP54 Display | 120 Hz Refresh Rate | 50 MP AI Triple Rear Camera | 8 MP Front Camera| 5000 mAh Battery| Charger in Box",
        rate: "M.R.P.: ₹6,799 -19%",
        del: "₹8,399"
      },
      {
        name: "Xiaomi 15",
        category: "mobiles",
        img: Mobile5,
        desc: "Xiaomi 15 (Green, 12GB/512GB)| 50 MP Leica Triple Camera | SD 8 Elite | 1.5K CrystalRes Dynamic 1-120 Hz AMOLED | Hyper AI",
        rate: "M.R.P.: ₹64,999 -19%",
        del: "₹79,999"
      },
      {
        name: "Redmi A4 5G",
        category: "mobiles",
        img: Mobile6,
        desc: "Redmi A4 5G (Starry Black, 4GB RAM, 128GB Storage) | Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging",
        rate: "M.R.P.: ₹8,799 -27%",
        del: "₹11,999"
      },
      {
        name: "Samsung Galaxy S25 Ultra",
        category: "mobiles",
        img: Mobile7,
        desc: "Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI (Titanium Whitesilver, 12GB RAM, 256GB Storage), Titanium Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual Engine and 5000mAh Battery",
        rate: "M.R.P.: ₹1,17,999 -9%",
        del: "₹1,29,9999"
      },
      {
        name: "Tecno POP 9",
        category: "mobiles",
        img: Mobile8,
        desc: "Tecno POP 9 5G Aurora Cloud, 4GB+128GB| Segment's 1st 48MP Sony AI Camera| Segment's 1st 5G with NFC | D6300 5G Processor | 4+ Year Lag Free Fluency |5000 mAh Battery |Dual Speaker |Without Charger",
        rate: "M.R.P.: ₹8,399 -30%",
        del: "₹11,999"
      },
      {
        name: "Samsung Galaxy M35",
        category: "mobiles",
        img: Mobile9,
        desc: "Samsung Galaxy M35 5G (Daybreak Blue,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display| Without Charger",
        rate: "M.R.P.: ₹16,998 -31%",
        del: "₹24,499"
      },
      {
        name: "Nokia 105 Classic",
        category: "mobiles",
        img: Mobile12,
        desc: "Nokia 105 Classic | Single SIM Keypad Phone with Built-in UPI Payments, Long-Lasting Battery, Wireless FM Radio, Without Charger | Charcoal",
        rate: "M.R.P.: ₹974 -22%",
        del: "₹1,249"
      },
]

function Mobiles({ onAddToCart }) {
  const [addedMessageIndex, setAddedMessageIndex] = useState(null);
const element = document.getElementById(location.state?.scrollTo);
  const handleAddToCart = (item, index) => {
    onAddToCart(item);
    setAddedMessageIndex(index); // show message for this item

    setTimeout(() => {
      setAddedMessageIndex(null); // hide message after 3 sec
    }, 3000);
  };

  return (
    <div className="mobile1">
      {MobileArray.map((item, index) => (
       <div className="mob" id={item.name} key={index}>
          <img src={item.img} alt="mobile" width={200} />
          <div className="des">{item.desc}</div>
          <div>{item.rate} <del>{item.del}</del></div>
          <br />
          <button className="cart" onClick={() => handleAddToCart(item, index)}>
            Add To Cart
          </button>

          {/* ✅ Show this only for recently added item */}
          {addedMessageIndex === index && (
            <div style={{ color: 'green', marginTop: '10px' }}>
              ✅ Your product is added to cart!
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Mobiles;
