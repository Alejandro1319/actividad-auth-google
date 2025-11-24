import { Link } from "react-router-dom";

export default function Restricted() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Acceso Restringido</h1>
      <Link to="/login">Ir a Login</Link>
    </div>
  );
}
