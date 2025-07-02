--- React Password Reset App ---
This is the frontend portion of the password reset flow application. It provides a smooth and responsive interface for users to initiate password reset requests and easily reset their passwords.

Features
Secure User Registration: (Note: Registration is handled by the backend API, but this frontend can be used to initiate that flow via a form, if added)

Password Reset Request: Users can request a password reset link using their registered email address.

Secure Token-Based Reset: Parses the reset token received from the backend from the URL.

Password Update: Users can reset their password using the received link.

Responsive UI: A consistent experience across all devices using Bootstrap.

Technologies Used
React: JavaScript library for building user interfaces.

React Router DOM: For handling navigation in a single-page application.

Fetch API: For communication with the backend API.

Bootstrap: CSS framework for responsive and stylish UI components.

Font Awesome: For icons.

Google Fonts (Inter): For font styling.

Folder Structure
password-reset-app/
└── client/               # React Frontend Code
    ├── public/           # Public assets (e.g., index.html)
    ├── src/              # Source code
    │   ├── components/   # Reusable React Components
    │   │   └── MessageBox.js
    │   ├── pages/        # Main Application Pages
    │   │   ├── ForgotPassword.js
    │   │   └── ResetPassword.js
    |   |   |── RegisterPage.js
    |   |   |── LoginPage.js  
    │   ├── App.js        # Main App Component and Routing
    │   └── index.js      # Entry point for the React application
    └── package.json      # Frontend Dependencies

Setup and Run Locally
Before you begin, ensure that Node.js and npm/yarn are installed on your system.

1. Frontend Setup
Navigate to the client folder:

cd password-reset-app/client

Install dependencies:

npm install

Run the frontend app:

npm start

Your React app will open at http://localhost:3000.

Deployment
The frontend is recommended to be deployed as a static site on Render.com.

Deployment Flow:

Push Code to GitHub: Ensure the entire content of your client folder is in a GitHub repository.

Deploy Frontend (Render Static Site):

Create a new "Static Site" on Render.

Root Directory: Set to client.

Build Command: npm install && npm run build

Publish Directory: build

Environment Variable: Set REACT_APP_BACKEND_URL to your deployed backend URL (https://password-reset-backend-lfch.onrender.com). This ensures your deployed frontend can communicate with your deployed backend.

Render will provide the URL of your deployed frontend (----).

Testing
Local Testing
Ensure the backend (https://password-reset-backend-lfch.onrender.com) is running.

Go to the frontend app (http://localhost:3000).

Enter the registered email and click "Send Reset Link".

Check your email inbox and click the reset link.

Proceed to the reset page with a new password.

Deployed Testing
Go to your deployed frontend URL (----).

Enter the registered email and click "Send Reset Link".

Check your email inbox and click the reset link.

Proceed to the reset page with a new password.