// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword'; // 'Import 'Forgot Password' page
import ResetPassword from './pages/ResetPassword';   // 'Import 'Reset Password' page

// The main app component that handles routing
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* 'Route to the 'Forgot Password' page */}
                    <Route path="/" element={<ForgotPassword />} />
                    {/* 'Route to 'Reset Password' page, expecting 'token' URL parameter */}
                    <Route path="/reset-password" element={<ResetPassword />} />
                    {/* You can add other routes here, such as the login page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;