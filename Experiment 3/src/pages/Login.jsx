import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Login.css";

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const success = login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>JWT Authentication</h1>

        <p>Role-Based Access Control (RBAC)</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="error">{error}</p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <div className="demo">
          <h3>Demo Login Credentials</h3>

          <p>
            <strong>Admin</strong><br />
            admin@gmail.com<br />
            admin123
          </p>

          <p>
            <strong>Editor</strong><br />
            editor@gmail.com<br />
            editor123
          </p>

          <p>
            <strong>Viewer</strong><br />
            viewer@gmail.com<br />
            viewer123
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;