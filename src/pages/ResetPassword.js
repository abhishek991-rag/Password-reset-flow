// client/src/pages/ResetPassword.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MessageBox from '../components/MessageBox'; 

function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const [message, setMessage] = useState(''); 
    const [messageTitle, setMessageTitle] = useState(''); 

    useEffect(() => {
        
        const queryParams = new URLSearchParams(location.search);
        const tokenFromUrl = queryParams.get('token');
        if (tokenFromUrl) {
            setToken(tokenFromUrl);
        } else {
            
            setMessageTitle('error');
            setMessage('No reset token received. Please use the link from your email.');
        }
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(''); 
        setMessageTitle('');

        if (!token) {
            setMessageTitle('error');
            setMessage('The password reset token is missing.');
            setLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessageTitle('error');
            setMessage('The passwords do not match.');
            setLoading(false);
            return;
        }

        
        if (newPassword.length < 8 || !/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword) || !/[^A-Za-z0-9]/.test(newPassword)) {
            setMessageTitle('error');
            setMessage('The password must be at least 8 characters long and include capital letters, small letters, numbers, and special characters.');
            setLoading(false);
            return;
        }

        try {
           
            const response = await fetch('http://localhost:5000/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessageTitle('success');
                setMessage(data.message + ' You can now login with your new password.');
               
                setTimeout(() => navigate('/'), 3000); // Redirect to home/login after 3 seconds
            } else {
                setMessageTitle('error');
                setMessage(data.message || 'An unexpected error occurred during password reset.');
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
        if (messageTitle === 'success') {
            navigate('/'); 
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="card p-4 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
                <h2 className="card-title text-center mb-4">Reset your password</h2>
                <p className="text-center text-muted mb-4">
                    Enter your new password below.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="fas fa-lock"></i></span>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                placeholder="enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                aria-label="new password"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm new password</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="fas fa-lock"></i></span>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                aria-label="Confirm new password"
                            />
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" disabled={loading || !token}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Resetting...
                                </>
                            ) : (
                                'reset password'
                            )}
                        </button>
                    </div>
                </form>

                
                <MessageBox
                    title={messageTitle}
                    message={message}
                    onClose={closeMessageBox}
                />
            </div>
        </div>
    );
}

export default ResetPassword;