import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Product from "./Components/Product";
import Slider from "./Components/Slider";
import Login from "./Components/Login";

export default function App(){
    return <>
    <div class="hero_area">
      <Menu/>
      <Slider/>
    </div>

      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
  </>
}