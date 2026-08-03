import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Admin.css";

function Viewer() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="role-card viewer">
          <h1>👀 Viewer Panel</h1>

          <p>
            Welcome Viewer! You have read-only access.
          </p>

          <div className="features">
            <div className="feature-card">
              <h3>View Articles</h3>
              <p>Read all available content.</p>
            </div>

            <div className="feature-card">
              <h3>Profile</h3>
              <p>View your account information.</p>
            </div>

            <div className="feature-card">
              <h3>Notifications</h3>
              <p>Check system notifications.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Viewer;