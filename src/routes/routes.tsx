import Store from "pages/store";
import Home from "pages/home";
import Login from "pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "components/Category";
import Cart from "pages/cart";
import SinglePet from "pages/singlePet";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/single-pet/:id" element={<SinglePet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
