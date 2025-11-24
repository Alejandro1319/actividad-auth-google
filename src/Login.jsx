import { useEffect } from "react";

export default function Login({ onLogin }) {
  useEffect(() => {
    const wait = setInterval(() => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "356382928542-7d99v989oeand0qqqi2f70vb4n5oc6qu.apps.googleusercontent.com",
          callback: onLogin,
        });
        window.google.accounts.id.renderButton(
          document.getElementById("googleBtn"),
          { theme: "filled", size: "large" }
        );
        clearInterval(wait);
      }
    }, 100);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <div id="googleBtn"></div>
    </div>
  );
}