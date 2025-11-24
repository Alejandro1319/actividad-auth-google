import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Dashboard({logout }) {
  const [bye, setBye] = useState(false);

  if (bye) return <Navigate to="/login" />;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido</h1>
      <button
        onClick={() => {
          logout();
          setBye(true);
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
