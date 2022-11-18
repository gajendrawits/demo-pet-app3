import { Navigate } from "react-router-dom";

interface access {
  children: any;
}

const Protected = ({ children }: access) => {
  const isToken = localStorage.getItem("token");
  return isToken ? children : <Navigate to="/" />;
};

export default Protected;
