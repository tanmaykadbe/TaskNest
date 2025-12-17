# TaskNest
It is a project made purely for frontend based on React and Tailwind CSS
📝 iTask – Todo App

A simple and efficient Todo (Task Management) application built using React and Tailwind CSS.
The app allows users to manage daily tasks with features like add, edit, delete, mark complete, and persistent storage.

🚀 Features

➕ Add new tasks

✏️ Edit existing tasks

❌ Delete tasks

✔️ Mark tasks as completed

👀 Show / hide completed tasks

💾 Persistent data using localStorage

🎨 Clean and responsive UI with Tailwind CSS

🧭 Header (Navbar) and Footer included

⚡ Fast development setup using Vite

🛠️ Tech Stack

React (Hooks: useState, useEffect)

Tailwind CSS

Vite

React Icons

UUID (for unique task IDs)

Browser localStorage

📂 Project Structure
to-do-app/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


Note: Navbar, Footer, and Todo logic are implemented inside App.jsx for simplicity and learning purposes.

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/your-username/itask-todo-app.git


2️⃣ Navigate to the project folder

cd itask-todo-app


3️⃣ Install dependencies

npm install


4️⃣ Run the development server

npm run dev


5️⃣ Open in browser

http://localhost:5173

🧠 How the App Works (High Level)

Tasks are stored in React state as objects

On page load, tasks are fetched from localStorage

Any change in tasks automatically updates localStorage

UI updates are driven entirely by state

Conditional rendering is used to show/hide completed tasks

🧪 Key React Concepts Used

Functional Components

Controlled Inputs

State Management (useState)

Side Effects (useEffect)

Conditional Rendering

Immutability in state updates

Local Storage integration

🎨 UI & UX

Built using Tailwind CSS utility classes

Smooth hover animations in Navbar

Responsive layout

Clean, minimal design

Focus and accessibility-friendly input fields
