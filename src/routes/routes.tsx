import Login from "pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
