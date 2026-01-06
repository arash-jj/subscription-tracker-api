
# Subscription Tracker API 🧬

A robust and scalable backend API designed for managing user subscriptions, authentication, and related workflows. Built with Node.js and Express.js, it leverages MongoDB for data persistence and incorporates advanced security features like Arcjet for rate limiting and threat protection.

---

## 🚀 Features

*   **Secure User Authentication**: Registration, Login, and JWT-based authorization.
*   **Subscription Management**: Comprehensive CRUD operations for subscriptions.
*   **Workflow Automation**: Manages subscription lifecycle events and related processes.
*   **Database Integration**: Seamless persistence using MongoDB.
*   **Advanced Security**: Rate limiting and bot protection via Arcjet.
*   **Centralized Error Handling**: Consistent and informative error responses.
*   **Environment Configuration**: Flexible setup for development, staging, and production.

---

## 🛠️ Tech Stack

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (via Mongoose)
*   **Authentication**: JSON Web Tokens (JWT)
*   **Security**: Arcjet, Environment Variables
*   **Utility**: ESLint for code quality
*   **Configuration**: Dedicated configuration files for services like Arcjet and Upstash.

---

## 📁 Project Structure

```
.
├── .gitignore
├── app.js             # Main application entry point
├── eslint.config.js   # ESLint configuration
├── package-lock.json
├── package.json       # Project dependencies and scripts
├── config/            # Application configuration files
│   ├── arcjet.js      # Arcjet integration and configuration
│   ├── env.js         # Environment variable loading
│   └── upstash.js     # Upstash configuration (e.g., for Redis/Kafka)
├── controllers/       # Request handling logic
│   ├── auth.controller.js
│   ├── subscription.controller.js
│   ├── user.controller.js
│   └── workflow.controller.js
├── database/          # Database connection logic
│   └── mongodb.js     # MongoDB connection setup
├── middleware/        # Request processing middleware
│   ├── arcjet.middleware.js # Arcjet middleware for security
│   ├── auth.middleware.js   # Authentication/Authorization
│   └── error.middleware.js  # Centralized error handling
├── models/            # Database schemas and models
│   ├── subscription.model.js
│   └── user.model.js
├── public/            # Static assets (if any)
├── routes/            # API endpoint definitions
│   ├── auth.routes.js
│   ├── subscription.route.js
│   ├── user.routes.js
│   └── workflow.route.js
```

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18.x or higher recommended)
*   npm or Yarn package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/arash-jj/subscription-tracker-api
    cd subscription-tracker-api
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

The application relies on environment variables for configuration. Create a `.env` file in the root directory and populate it with the necessary values. A `.env.example` file is provided for reference.

**Key Environment Variables:**

*   `NODE_ENV`: Set to `development` or `production`.
*   `PORT`: The port the server will listen on (e.g., `3000`).
*   `MONGO_URI`: Connection string for your MongoDB database.
*   `JWT_SECRET`: A strong, secret key for signing JSON Web Tokens.
*   `ARCJET_SECRET_KEY`: Your Arcjet secret key for enabling security features.
*   `UPSTASH_URL`: URL for Upstash service (if used for caching, queues, etc.).
*   `UPSTASH_TOKEN`: Token for Upstash service.

### Running the Application

*   **Development Mode:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This command typically starts the server with hot-reloading and debugging enabled.

*   **Production Mode:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This command starts the server for production use, often with optimizations and without development-specific features.

---

## 🌐 API Endpoints Overview

The API exposes the following main resources and operations:

*   **Authentication (`/auth`)**:
    *   `POST /auth/register`: Register a new user.
    *   `POST /auth/login`: Authenticate a user and receive a JWT.

*   **Users (`/users`)**:
    *   `GET /users/me`: Retrieve the profile of the currently authenticated user.
    *   *(Additional user management endpoints may exist.)*

*   **Subscriptions (`/subscriptions`)**:
    *   `GET /subscriptions`: List all subscriptions for the authenticated user.
    *   `POST /subscriptions`: Create a new subscription.
    *   `GET /subscriptions/:id`: Retrieve details of a specific subscription.
    *   `PUT /subscriptions/:id`: Update an existing subscription.
    *   `DELETE /subscriptions/:id`: Delete a subscription.

*   **Workflows (`/workflows`)**:
    *   *(e.g., `POST /workflows`, `GET /workflows/:id`, etc.)*

*   **Health Check (`/health`)**:
    *   `GET /health`: A simple endpoint to verify API responsiveness and health.


---

## 💡 Error Handling

The application employs a centralized error handling middleware (`middleware/error.middleware.js`). This middleware intercepts errors thrown throughout the request lifecycle, logs them appropriately, and returns consistent, informative JSON error responses to the client with correct HTTP status codes. This approach abstracts away internal error details and simplifies error management.

---

## 🔒 Security

*   **Authentication**: Secured using industry-standard JSON Web Tokens (JWT) for stateless authentication and authorization.
*   **Authorization**: Middleware functions verify token validity and user permissions for protected resources.
*   **Threat Protection**: Integrates **Arcjet** to provide robust defense against common web threats such as brute-force attacks, DDoS, and malicious bots.
*   **Secure Configuration**: All sensitive credentials and secrets are managed securely through environment variables, avoiding hardcoding.

---
