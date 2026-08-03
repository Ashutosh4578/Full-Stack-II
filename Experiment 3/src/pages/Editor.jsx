import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Admin.css";

function Editor() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="role-card editor">
          <h1>✍️ Editor Panel</h1>

          <p>
            Welcome Editor! You can manage and edit content.
          </p>

          <div className="features">
            <div className="feature-card">
              <h3>Create Articles</h3>
              <p>Create new posts and documents.</p>
            </div>

            <div className="feature-card">
              <h3>Edit Content</h3>
              <p>Modify existing content.</p>
            </div>

            <div className="feature-card">
              <h3>Publish</h3>
              <p>Publish approved articles.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Editor;