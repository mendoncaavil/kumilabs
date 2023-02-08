import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import './styles.css'


export default function ButtonAppBar() {
  const counter = useSelector((state) => state.changeNumber);



  
  
  

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar
        
        sx={{ backgroundColor: "#FFE475", height: "102px" }} 
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#100E3A",
              fontFamily: "Mortise",
              fontWeight: "700",
              fontSize: "30px",
              marginTop: "15px",
            }}

          >
            E-Commerce
          </Typography>
          <div className="cart-box">
            <p className="shopping-cart-logo">
              <FiShoppingCart />
            </p>
            <p>{counter}</p>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
