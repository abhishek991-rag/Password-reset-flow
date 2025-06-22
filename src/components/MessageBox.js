// client/src/components/MessageBox.js
import React from 'react';

// A custom component that displays a message, replacing the native alert()
const MessageBox = ({ title, message, onClose }) => {
    if (!message) return null; // Do not render if there is no message

    return (
        <div className="message-box-overlay">
            <div className="message-box-content">
                <div className="message-box-header">
                    {title || "massage"} {/* Default title if no title is provided */}
                    <button type="button" className="message-box-close-btn" onClick={onClose}>
                        &times; {/* HTML entity for multiplication sign (X) */}
                    </button>
                </div>
                <div className="message-box-body">
                    <p>{message}</p>
                </div>
                <div className="message-box-footer">
                    <button type="button" className="btn btn-primary" onClick={onClose}>
                       Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageBox;