import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "pages/store";
import Home from "pages/home";
import Login from "pages/login";
import Cart from "pages/cart";
import SinglePet from "pages/singlePet";
import Protected from "./protected";
import Category from "components/Category";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/store"
          element={
            <Protected>
              <Store />
            </Protected>
          }
        />
        <Route
          path="/single-pet"
          element={
            <Protected>
              <SinglePet />
            </Protected>
          }
        />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/home/:category"
          element={
            <Protected>
              <Category />
            </Protected>
          }
        />
        <Route
          path="/cart"
          element={
            <Protected>
              <Cart />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
