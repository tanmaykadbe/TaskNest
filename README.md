# TaskNest: Todo App

A simple and efficient Task Management application built using React and Tailwind CSS.
The app allows users to manage daily tasks with features like add, edit, delete, mark complete, and persistent storage.

🚀 Features

➕ Add new tasks

✏️ Edit existing tasks

❌ Delete tasks

✔️ Mark tasks as completed

👀 Show / hide completed tasks

🎨 Clean and responsive UI with Tailwind CSS

🛠️ Tech Stack

React (Hooks: useState, useEffect)

Tailwind CSS
Vite
UUID (for unique task IDs)

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/your-tanmaykadbe/itask-todo-app.git


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
