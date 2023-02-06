import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Component/Navbar/MainNavbar.js";
import SideBar from "./Component/SideBar/SideBar";
import MainPage from "./Component/MainPage/MainPage";
import MobileBar from "./Component/MobileBar.js/MobileBar";


function App() {
  return (
    <div>
      <MainNavbar />
        <SideBar />
        <MobileBar/>
      <MainPage/>
    </div>
  );
}

export default App;
