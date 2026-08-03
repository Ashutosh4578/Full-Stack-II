import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">JWT RBAC</h2>

      {user && (
        <>
          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>

            {user.role === "Admin" && (
              <Link to="/admin">Admin</Link>
            )}

            {user.role === "Editor" && (
              <Link to="/editor">Editor</Link>
            )}

            {user.role === "Viewer" && (
              <Link to="/viewer">Viewer</Link>
            )}
          </div>

          <div className="profile">
            <span>{user.name}</span>
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;