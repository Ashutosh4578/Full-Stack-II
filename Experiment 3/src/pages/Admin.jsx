import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Admin.css";

function Admin() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="role-card admin">
          <h1>👑 Admin Panel</h1>

          <p>
            Welcome Admin! You have complete access to the application.
          </p>

          <div className="features">
            <div className="feature-card">
              <h3>User Management</h3>
              <p>Create, Update and Delete Users.</p>
            </div>

            <div className="feature-card">
              <h3>System Settings</h3>
              <p>Manage application configurations.</p>
            </div>

            <div className="feature-card">
              <h3>Reports</h3>
              <p>Access all system reports.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Admin;