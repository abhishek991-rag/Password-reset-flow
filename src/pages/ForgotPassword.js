// client/src/pages/ForgotPassword.js
import React, { useState } from 'react';
import MessageBox from '../components/MessageBox'; // Import custom message boxes

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(''); // position for message box
    const [messageTitle, setMessageTitle] = useState(''); // Position for message box title

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(''); 
        setMessageTitle('');

        try {
          
            const response = await fetch('http://localhost:5000/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                // Success message (to stop enumeration even if user doesn't exist)
                setMessageTitle('Success');
                setMessage(data.message);
            } else {
                // Error message from server
                setMessageTitle('error');
                setMessage(data.message || 'An unexpected error occurred.');
            }
        } catch (error) {
            console.error('error:', error);
            setMessageTitle('error');
            setMessage('Could not connect to server. Please ensure the backend is running and accessible.');
        } finally {
            setLoading(false);
        }
    };

    const closeMessageBox = () => {
        setMessage('');
        setMessageTitle('');
        setEmail(''); 
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="card p-4 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
                <h2 className="card-title text-center mb-4">Forgot Password</h2>
                <p className="text-center text-muted mb-4">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="email address"
                            />
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Sending it...
                                </>
                            ) : (
                                'Send reset link'
                            )}
                        </button>
                    </div>
                </form>

                {/* Custom message box */}
                <MessageBox
                    title={messageTitle}
                    message={message}
                    onClose={closeMessageBox}
                />
            </div>
        </div>
    );
}

export default ForgotPassword;