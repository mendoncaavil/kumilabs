import React, { useState, useRef } from "react";
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

  const[toggle, setToggle] = useState(true);

    const counter = useSelector(state => state.changeNumber);
    const dispatch = useDispatch();

    const targetElement = useRef(null); 

    const addtoCart = (id) => {
       if(id!== 0){
        dispatch(inNum())
       } else{
        dispatch(deNum())
       } 
      setToggle(false)
      console.log(id)

    }

    const removefromCart = (id) => {
      dispatch(deNum());
      setToggle(true)
      console.log(id)
    }

  const arr = [
    {
      id: 1,
      image: `${fruit1}`,
      price: "$0.69",
      name: "Banana 1 ct",
      weight: "18 oz",
     
    },
    {
      id: 2,
      image: `${fruit2}`,
      price: "$0.69",
      name: "Strawberries",
      weight: "1 lb",
    },
    {
      id: 3,
      image: `${fruit3}`,
      price: "$0.69",
      name: "Yoghurt",
      weight: "1 lb",
    },
    {
      id: 4,
      image: `${fruit4}`,
      price: "$0.69",
      name: "blackberries",
      weight: "1 lb",
    },
    {
      id: 5,
      image: `${fruit1}`,
      price: "$0.69",
      name: "Banana 1 ct",
      weight: "18 oz",
    },
    {
      id: 6,
      image: `${fruit2}`,
      price: "$0.69",
      name: "Strawberries",
      weight: "1 lb",
    },
    {
      id: 7,
      image: `${fruit3}`,
      price: "$0.69",
      name: "Yoghurt",
      weight: "1 lb",
    },
    {
      id: 8,
      image: `${fruit4}`,
      price: "$0.69",
      name: "blackberries",
      weight: "1 lb",
    },
  ];



  return (
    <div className="main-wrapper">
      <div className="main-display" >
        <h1 className="heading-section-1" id="produce">
          Produce
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item, id) => {
            return (
              <>
                <div key={id}>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                    <img src={add} onClick={()=> addtoCart(item.id)} /> 
                    <img src={minus} onClick={()=> removefromCart(item.id)} />        
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


      <div className="main-display" >
        <h1 className="heading-section-1" id="produce">
          Produce
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item, id) => {
            return (
              <>
                <div key={id}>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                   <img src={add} onClick={()=> addtoCart(item.id)} /> 
                    <img src={minus} onClick={()=> removefromCart(item.id)} />                    
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

      <div className="main-display" >
        <h1 className="heading-section-1" id="produce">
          Produce
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item, id) => {
            return (
              <>
                <div key={id}>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                  <img src={add} onClick={()=> addtoCart(item.id)} /> 
                    <img src={minus} onClick={()=> removefromCart(item.id)} />               
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

      <div className="main-display" >
        <h1 className="heading-section-1" id="produce">
          Produce
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item, id) => {
            return (
              <>
                <div key={id}>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                  <img src={add} onClick={()=> addtoCart(item.id)} /> 
                    <img src={minus} onClick={()=> removefromCart(item.id)} />                 
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

      <div className="main-display" >
        <h1 className="heading-section-1" id="produce">
          Produce
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item, id) => {
            return (
              <>
                <div key={id}>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                  <img src={add} onClick={()=> addtoCart(item.id)} /> 
                    <img src={minus} onClick={()=> removefromCart(item.id)} />                    
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

      <div className="main-display" >
        <h1 className="heading-section-1" id="produce">
          Produce
          <span className='arrow-img'>
            <img src={vector} />
          </span>
        </h1>
        <div className="products">
          {arr.map((item, id) => {
            return (
              <>
                <div key={id}>
                  <img src={item.image} alt={item.image} />
                  <span className="addtocartIcon">
                  <img src={add} onClick={()=> addtoCart(item.id)} /> 
                    <img src={minus} onClick={()=> removefromCart(item.id)} />                  
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
    </div>
  );
}

export default MainPage;
