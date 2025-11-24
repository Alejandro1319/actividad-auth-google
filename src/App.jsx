import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Restricted from "./Restricted.jsx";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleCredential = (res) => {
    localStorage.setItem("token", res.credential);
    setToken(res.credential);
    navigate("/dashboard");
  };

  useEffect(() => {
    if (token && window.location.pathname === "/login")
      navigate("/dashboard");
  }, []);

  const logout = () => {
    setLoggingOut(true);
    localStorage.removeItem("token");
    setToken(null);

    setTimeout(() => {
      navigate("/login", { replace: true });
      setLoggingOut(false);
    }, 10);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          token ? <Navigate to="/dashboard" /> : <Login onLogin={handleCredential} />
        }
      />

      <Route
        path="/dashboard"
        element={
          token || loggingOut
            ? <Dashboard token={token} logout={logout} />
            : <Navigate to="/restricted" replace />
        }
      />

      <Route path="/restricted" element={<Restricted />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
