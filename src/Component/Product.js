import React, { useRef } from "react";
import "./Product.css";
import Bakery from "./Bakery";
import CanFood from "./CanFood";
import Dairy from "./Dairy";
import Frozen from "./Frozen";
import Meat from "./Meat";
import PreparedFood from "./PreparedFood";
import Produce from "./Produce";

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
        <div>
          <button  onClick={handleProduce} className='button-box'>
            Produce
          </button>
        </div>
        <div>
          <button  onClick={handlePreparedFood} className='button-box'>
            Prepared foods
          </button>
        </div>
        <div>
          <button  onClick={handleCanFood} className='button-box'>
            Canned food and soups
          </button>
        </div>
        <div>
          <button  onClick={handleProduce} className='button-box'>
            Produce
          </button>
        </div>
        <div>
          <button  onClick={handleBakery} className='button-box'>
            Bakery
          </button>
        </div>
        <div>
          <button  onClick={handleDairy} className='button-box'>
            Dairy and eggs
          </button>
        </div>
        <div>
          <button  onClick={handleFrozen} className='button-box'>
            Frozen
          </button>
        </div>
        <div>
          <button  onClick={handleMeat} className='button-box'>
            Meat
          </button>
        </div>
        <div>
          <button  onClick={handleDairy} className='button-box'>
            Diary and eggs
          </button>
        </div>
        <div>
          <button  onClick={handleBakery} className='button-box'>
            Bakery
          </button>
        </div>
        <div>
          <button  onClick={handleProduce} className='button-box'>
            Produce
          </button>
        </div>
        <div>
          <button  onClick={handleDairy} className='button-box'>
            Dairy and eggs
          </button>
        </div>
        <div>
          <button  onClick={handleFrozen} className='button-box'>
            Frozen
          </button>
        </div>
        <div>
          <button  onClick={handleMeat} className='button-box'>
            Meat
          </button>
        </div>
        <div>
          <button  onClick={handleDairy} className='button-box'>
            Diary and eggs
          </button>
        </div>
        <div>
          <button  onClick={handleBakery} className='button-box'>
            Bakery
          </button>
        </div>
      </div>

      <div className="combine">
        <Produce ref={produce} text="Produce >" />
        <PreparedFood ref={preparedFood} text="Prepared Foods >" />
        <CanFood ref={canFood} text="Canned Foods and Soups >" />
        <Produce ref={produce} text="Produce >" />
        <Bakery ref={bakery} text="Bakery >" />
        <Dairy ref={dairy} text="Dairy and Eggs >" />
        <Frozen ref={frozen} text="Frozen >" />
        <Meat ref={meat} text="Meat >" />
        <Dairy ref={dairy} text="Dairy and Eggs>" />
        <Bakery ref={bakery} text="Bakery >" />
      </div>
    </div>
  );
}

export default Product;
