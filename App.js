import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const globalCSS = `
    body {
        font-family: 'Inter', sans-serif; /* Use Inter font */
        background-color: #f8f9fa; /* Light grey background */
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* Full viewport height */
        margin: 0;
        box-sizing: border-box; /* Include padding and border in element's total width and height */
    }

    .container {
        padding: 15px; /* Add some padding for smaller screens */
    }

    .card {
        border-radius: 1rem; /* Rounded corners for cards */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    .form-control:focus {
        border-color: #80bdff;
        box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
    }

    .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
        border-radius: 0.5rem; /* Rounded buttons */
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .btn-primary:hover {
        background-color: #0056b3;
        border-color: #0056b3;
        box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.5);
    }

    /* --- Custom Message Box Styles --- */
    .message-box-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1050; /* Above Bootstrap modals */
    }

    .message-box-content {
        background-color: white;
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        text-align: center;
        max-width: 400px;
        width: 90%; /* Responsive width */
        position: relative; /* For close button positioning */
    }

    .message-box-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .message-box-close-btn {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #6c757d; /* Grey color */
    }

    .message-box-close-btn:hover {
        color: #343a40; /* Darker grey on hover */
    }

    .message-box-body {
        margin-bottom: 1.5rem;
        color: #343a40;
    }

    .message-box-footer {
        display: flex;
        justify-content: center;
    }

    .message-box-footer .btn {
        min-width: 100px;
    }
`;

function App() {
  useEffect(() => {
    const injectCssLink = (href) => {
      const link = document.createElement("link");
      link.href = href;
      link.rel = "stylesheet";
      document.head.appendChild(link);
      return link;
    };

    const bootstrapLink = injectCssLink(
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
    );
    const fontAwesomeLink = injectCssLink(
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    );
    const googleFontsLink = injectCssLink(
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    );

    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(globalCSS));
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(fontAwesomeLink);
      document.head.removeChild(googleFontsLink);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />{" "}
          {/* Default route to login */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
