import Store from "pages/store";
import Home from "pages/home";
import Login from "pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "components/Category";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
