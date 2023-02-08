import React, { useRef } from "react";
import "./Product.css";
import Bakery from "./Bakery";
import CanFood from "./CanFood";
import Dairy from "./Dairy";
import Frozen from "./Frozen";
import Meat from "./Meat";
import PreparedFood from "./PreparedFood";
import Produce from "./Produce";
import box1 from './Assets/box1.png'
import box2 from './Assets/box2.png'
import box3 from './Assets/box3.png'
import box4 from './Assets/box4.png'
import box5 from './Assets/box5.png'
import box6 from './Assets/box6.png'
import box7 from './Assets/box7.png'

function Product() {
  const bakery = useRef(null);
  const canFood = useRef(null);
  const dairy = useRef(null);
  const frozen = useRef(null);
  const meat = useRef(null);
  const preparedFood = useRef(null);
  const produce = useRef(null);

  const handleBakery = () => {
    bakery.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handleCanFood = () => {
    canFood.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handleDairy = () => {
    dairy.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handleFrozen = () => {
    frozen.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handleMeat = () => {
    meat.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handlePreparedFood = () => {
    preparedFood.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handleProduce = () => {
    produce.current?.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div className="products-wrapper">
      <div className="sideBar">
        <div className='button-box' onClick={handleProduce} >
          <img src={box1} alt="product" className='product-img'/>
          <p> Produce </p>
        </div>
        <div className='button-box'  onClick={handlePreparedFood}>
          <img src={box2} alt="product" className='product-img'/>
          <p>Prepared foods </p>
        </div>
        <div className="button-box" onClick={handleCanFood}>
          <img src={box4} alt="product" className='product-img'/>
          <p > Canned food and soups</p>
        </div>
        <div className='button-box' onClick={handleProduce} >
          <img src={box1} alt="product" className='product-img'/>
          <p> Produce </p>
        </div>
        <div className='button-box' onClick={handleBakery}>
          <img src={box3} alt="product" className='product-img'/>
          <p>Bakery</p>
        </div>
        <div className='button-box' onClick={handleDairy}>
          <img src={box5} alt="product" className="product-img"/>
          <p>Dairy and eggs </p>
        </div>
        <div className='button-box' onClick={handleFrozen}>
          <img src={box6} alt="product" className="product-img"/>
          <p> Frozen </p>
        </div>
        <div className='button-box' onClick={handleMeat}>
          <img src={box7} alt="product" className="product-img"/>
          <p> Meat </p>
        </div>
        <div className='button-box' onClick={handleDairy}>
          <img src={box5} alt="product" className="product-img"/>
          <p>Dairy and eggs </p>
        </div>
        <div className='button-box' onClick={handleBakery}>
          <img src={box3} alt="product" className='product-img'/>
          <p>Bakery</p>
        </div>
        <div className='button-box' onClick={handleProduce} >
          <img src={box1} alt="product" className='product-img'/>
          <p> Produce </p>
        </div>
        <div className='button-box' onClick={handleDairy}>
          <img src={box5} alt="product" className="product-img"/>
          <p>Dairy and eggs </p>
        </div>
        <div className='button-box' onClick={handleFrozen}>
          <img src={box6} alt="product" className="product-img"/>
          <p> Frozen </p>
        </div>
        <div className='button-box' onClick={handleMeat}>
          <img src={box7} alt="product" className="product-img"/>
          <p> Meat </p>
        </div>
        <div className='button-box' onClick={handleDairy}>
          <img src={box5} alt="product" className="product-img"/>
          <p>Dairy and eggs </p>
        </div>
        <div className='button-box' onClick={handleBakery}>
          <img src={box3} alt="product" className='product-img'/>
          <p>Bakery</p>
        </div>
      </div>

      <div className="combine">
        <Produce ref={produce} text="Produce >" />
        <PreparedFood ref={preparedFood} text="Prepared Foods >" />
        <CanFood ref={canFood} text="Canned Foods and Soups >" />
        {/* <Produce ref={produce} text="Produce >" /> */}
        <Bakery ref={bakery} text="Bakery >" />
        <Dairy ref={dairy} text="Dairy and Eggs >" />
        <Frozen ref={frozen} text="Frozen >" />
        <Meat ref={meat} text="Meat >" />
        {/* <Dairy ref={dairy} text="Dairy and Eggs>" /> */}
        {/* <Bakery ref={bakery} text="Bakery >" /> */}
      </div>
    </div>
  );
}

export default Product;
