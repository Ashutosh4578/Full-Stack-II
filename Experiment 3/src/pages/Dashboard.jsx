import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";

function Dashboard() {

  const { user } = useContext(AuthContext);

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <div className="dashboard-card">

          <h1>Welcome</h1>

          <h2>{user.name}</h2>

          <p>Email : {user.email}</p>

          <p>Role : {user.role}</p>

          <p>
            You have successfully logged in using
            JWT Authentication.
          </p>

        </div>

        <div className="dashboard-grid">

          <div className="card">
            <h3>Authentication</h3>
            <p>JWT Token Generated Successfully</p>
          </div>

          <div className="card">
            <h3>Authorization</h3>
            <p>Role Based Access Enabled</p>
          </div>

          <div className="card">
            <h3>Security</h3>
            <p>Protected Routes Activated</p>
          </div>

        </div>

      </div>

      <Footer />

    </>

  );
}

export default Dashboard;