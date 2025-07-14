Here's a complete and professional `README.md` file for your   React + Node.js (Express + MongoDB)   authentication system with dashboard and user table functionality.

 

   📘 README.md

 markdown
  🔐 React Authentication Dashboard with Express & MongoDB

A modern, full-stack authentication system built using   React  ,   TypeScript  ,   Express.js  , and   MongoDB  . It features secure user   Sign Up  ,   Sign In  , and a protected   Dashboard   displaying user data in a stylish Ant Design table.

 

   🧩 Tech Stack

    🔹 Frontend
- React + TypeScript
- React Router DOM
- Axios for API communication
- Ant Design (`antd`) for table UI
- Custom validation using RegEx
- CSS Flexbox-based styling

    🔹 Backend
- Node.js with Express
- MongoDB + Mongoose
- bcryptjs for password hashing
- JWT for authentication
- dotenv for environment variables

 

   🚀 Features

- ✅ Responsive Sign Up & Sign In forms
- ✅ Field validation with regex and limits
- ✅ Password strength check
- ✅ Gender selection with radio buttons
- ✅ Dashboard with left sidebar navigation
- ✅ Protected routes using localStorage token
- ✅ Dynamic Ant Design table showing all users

 

   🗂️ Folder Structure

 

📦project-root
┣ 📁client
┃ ┣ 📁components
┃ ┃ ┗ 📄InputField.tsx
┃ ┣ 📁pages
┃ ┃ ┣ 📄SignUp.tsx
┃ ┃ ┣ 📄SignIn.tsx
┃ ┃ ┗ 📄Dashboard.tsx
┃ ┣ 📁utils
┃ ┃ ┣ 📄validator.ts
┃ ┃ ┗ 📄helper.ts
┃ ┗ 📄App.tsx
┣ 📁server
┃ ┣ 📁controllers
┃ ┃ ┗ 📄authControllers.ts
┃ ┣ 📁models
┃ ┃ ┗ 📄User.ts
┃ ┣ 📁routes
┃ ┃ ┗ 📄authRoutes.ts
┃ ┗ 📄server.ts
┣ 📄README.md
┗ 📄.env

 `

 

   🛠️ Installation

    🔧 Backend Setup

 bash
cd server
npm install
 `

  Create `.env` file:

 env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
 

  Run server:

 bash
npm run dev
 

 

    💻 Frontend Setup

 bash
cd client
npm install
npm start
 

 

   📦 API Endpoints

| Method | Endpoint             | Description       |
|    |       -- |      -- |
| POST   | `/api/auth/register` | User registration |
| POST   | `/api/auth/login`    | User login        |
| GET    | `/api/auth/users`    | Fetch all users   |


 

   ✨ Future Features

  [ ] Password reset via email
  [ ] JWT refresh token handling
  [ ] Role-based access control (RBAC)
  [ ] Backend pagination & search filters
  [ ] User profile editing

 

   🤝 Author

👩‍💻   Huma Shafique  
A software engineering student passionate about full-stack development.

 

   📄 License
