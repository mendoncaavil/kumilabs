import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Component/Navbar/MainNavbar.js";
import Product from "./Component/Product";


function App() {
  return (
    <div>
      <MainNavbar />
      <Product/>
    </div>
  );
}

export default App;
