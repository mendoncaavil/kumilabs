import React, { useState } from "react";
import "./MainPage.css";
import vector from "../Assets/vector.png";
import fruit1 from "../Assets/fruit1.png";
import fruit2 from "../Assets/fruit2.png";
import fruit3 from "../Assets/fruit3.png";
import fruit4 from "../Assets/fruit4.png";
import add from "../Assets/add.png";
import minus from "../Assets/minus.png";

import { useSelector, useDispatch } from "react-redux";
import { inNum, deNum } from "../../Actions/Index";

function MainPage() { 

  const[toggle, setToggle] = useState([]);


    const counter = useSelector(state => state.changeNumber);
    const dispatch = useDispatch();


    const addtoCart = (id) => {
      // console.log(id);
      dispatch(inNum(id));      
      setToggle((oldItems)=>[...oldItems, id])
      console.log(toggle)
    }

    const removefromCart = (id) => {
      dispatch(deNum(id));
      setToggle(true)
    }

  const arr = [
    {
      image: `${fruit1}`,
      price: "$0.69",
      name: "Banana 1 ct",
      weight: "18 oz",
    },
    {
      image: `${fruit2}`,
      price: "$0.69",
      name: "Strawberries",
      weight: "1 lb",
    },
    {
      image: `${fruit3}`,
      price: "$0.69",
      name: "Yoghurt",
      weight: "1 lb",
    },
    {
      image: `${fruit4}`,
      price: "$0.69",
      name: "blackberries",
      weight: "1 lb",
    },
  ];



  return (
    <div className="main-wrapper">
      <div className="main-display" >
        <h1 className="heading-section-1">
          Produce
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item, id) => {
            return (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                    {toggle.find((toggledId)=>{
                      return toggledId === id
                    }) === null ? <img src={minus} onClick={()=> removefromCart(id)} /> : 
                    <img src={add} onClick={()=> addtoCart(id)} />}
                    
                  </span>
                  <div>
                    <p className="product_price">{item.price}</p>
                    <p className="product_name">{item.name}</p>
                    <p className="product_weight">{item.weight}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>


      <div className="main-display">
        <h1 className="heading-section-1">
          Prepared foods
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item) => {
            return (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                    <img src={add} />
                  </span>
                  <div>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    <p>{item.weight}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="main-display">
        <h1 className="heading-section-1">
          Canned food & Soups
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item) => {
            return (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                    <img src={add} />
                  </span>
                  <div>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    <p>{item.weight}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="main-display">
        <h1 className="heading-section-1">
          Frozen
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item) => {
            return (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                    <img src={add} />
                  </span>
                  <div>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    <p>{item.weight}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="main-display">
        <h1 className="heading-section-1">
          Meat & Seafood
          <span className='arrow-img'> 
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item) => {
            return (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                    <img src={add} />
                  </span>
                  <div>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    <p>{item.weight}</p>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    <p>{item.weight}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="main-display" id="Bakery">
        <h1 className="heading-section-1">
          Bakery
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item) => {
            return (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                    <img src={add} />
                  </span>
                  <div>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    <p>{item.weight}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
