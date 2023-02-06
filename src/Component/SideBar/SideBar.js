import React from "react";
import './SideBar.css'
import { Scrollbars } from 'react-custom-scrollbars-2';


const components = [
  "Prepared Foods",
  "Canned foods & Soups",
  "Bakery",
  "Dairy & Eggs",
  "Frozen",
  "Meat & Seafood",
  "Produce",
  "Prepared Foods",
  "Canned foods & Soups",
  "Bakery",
  "Dairy & Eggs",
  "Frozen",
  "Meat & Seafood",
  "Prepared Foods",
  "Canned foods & Soups",
  "Bakery",
  "Dairy & Eggs",
  "Frozen",
  "Meat & Seafood",
];
  

const SideBar = () => {
  return (
    <div className="sidebar_wrapper">
    <Scrollbars style={{ width: 230, height: "100vh" }} >
      <div className="sidebar">
        {components.map((item) => (
          <p className="sidebar-items">{item}</p>            
        ))}
      </div>
      </Scrollbars>
      </div>
      

  );
};

export default SideBar;
