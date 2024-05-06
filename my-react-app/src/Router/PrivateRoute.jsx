import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("Redirigiendo a la página de inicio de sesión...");
      window.location.href = "/login";
    }
  }, [isLoggedIn]); // Solo depende de isLoggedIn

  return isLoggedIn ? children : <Navigate to="/login" />;
};
