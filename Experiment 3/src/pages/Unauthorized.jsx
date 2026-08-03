import { Link } from "react-router-dom";
import "../styles/Admin.css";

function Unauthorized() {
  return (
    <div className="page-container">
      <div className="role-card">
        <h1>🚫 Access Denied</h1>

        <p>
          Sorry! You are not authorized to access this page.
        </p>

        <Link to="/dashboard">
          <button className="back-btn">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;