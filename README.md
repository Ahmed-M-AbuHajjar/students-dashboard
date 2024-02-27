## Students Dashboard

### Overview

This project is a full-stack application designed to present student quizzes and announcements data for the current semester. It consists of both frontend and backend components, built with React, Redux, TypeScript, and Express.js with MongoDB.

#### Project Specs

**Frontend Part:**
- Dashboard is rendered only to logged-in users.
- Authentication: Users can log in without credentials, and only logged-in users can access the dashboard.
- Responsive Design: The application is designed to work seamlessly across various devices and screen sizes.
- Reusable Components: Reusable components were used to maintain consistency and improve maintainability.
- Material UI: Consistent styling is achieved using Material UI components.
- Internationalization (i18n): The application is prepared for future translation using i10n concepts and packages.
- Testing: Extensive unit and integration tests were used to ensure the reliability of the codebase.

**Backend Part:**
- Web Services: Endpoints were created for retrieving announcement and quiz data.
- CRUD Operations: Implemented CRUD operations for announcements and quizzes.

### Setup Process

#### Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
   ```


2. **Install Dependencies:**
   ```bash
   npm install
   ```

   The frontend server will start, and you can access the application at `http://localhost:3000`.

3. **Start the Frontend Server:**
   ```bash
   npm start
   ```
4. **Start the Frontend test:**
    ```bash
   npm test
   ```

#### Backend Setup

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

   The backend server will start, and you can access the APIs at `https://anywarebackend.onrender.com`.
   review the APIs doc.pdf to view how to use the endpoints

3. **Start the Backend Server:**
   ```bash
   npm start
   ```

### Project Features

- **Authentication**: Users can log in without credentials, and only logged-in users can access the dashboard.
- **Responsive Design**: The application is designed to work seamlessly across various devices and screen sizes.
- **Reusable Components**: Utilized reusable components to maintain consistency and improve maintainability.
- **Material UI Styling**: Consistent styling is achieved using Material UI components.
- **Internationalization Support**: The application is prepared for future translation using i10n concepts and packages.
- **Testing**: Extensive unit and integration tests were used to ensure the reliability of the codebase.
- **Backend APIs**: CRUD operations are supported for announcements and quizzes through backend web services.

---
