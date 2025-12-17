import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showCompleted, setShowCompleted] = useState(true)

  // Load todos once
  useEffect(() => {
    const stored = localStorage.getItem("todos")
    if (stored) {
      setTodos(JSON.parse(stored))
    }
  }, [])

  // Persist todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (todo.trim().length < 3) return
    setTodos(prev => [
      ...prev,
      { id: uuidv4(), text: todo, completed: false }
    ])
    setTodo("")
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const editTodo = (id) => {
    const t = todos.find(t => t.id === id)
    setTodo(t.text)
    deleteTodo(id)
  }

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <>
      {/* Header */}
      <nav className="bg-slate-800 text-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-2xl font-bold cursor-pointer">Task Nest</h1>
          <ul className="flex gap-8 text-lg">
            <li className="cursor-pointer transition-all duration-300 hover:font-bold hover:scale-105">
              Home
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:font-bold hover:scale-105">
              Your Tasks
            </li>
          </ul>
        </div>
      </nav>

      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-slate-200 min-h-[80vh] md:w-[35%]">
        <h1 className="font-bold text-center text-3xl">
          Manage your tasks at one place
        </h1>

        {/* Add Todo */}
        <div className="my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Add a task</h2>
          <div className="flex">
            <input
              value={todo}
              color="white"
              onChange={e => setTodo(e.target.value)}
              className="w-full rounded-full px-5 py-1"
              type="text"
              placeholder="Enter your task here..."
              className="w-full rounded-full px-5 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="bg-slate-800 mx-2 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white"
            >
              Save
            </button>
          </div>
        </div>

        {/* Toggle completed */}
        <div className="my-3">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(prev => !prev)}
          />
          <span className="ml-2">Show Completed</span>
        </div>

        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>

        {/* Todos */}
        <h2 className="text-2xl font-bold">Your Tasks</h2>

        {todos.length === 0 && (
          <div className="m-5">No Tasks to display</div>
        )}

        {todos.map(t =>
          (showCompleted || !t.completed) && (
            <div key={t.id} className="flex justify-between my-3">
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTodo(t.id)}
                />
                <span className={t.completed ? "line-through" : ""}>
                  {t.text}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => editTodo(t.id)}
                  className="bg-slate-800 hover:bg-slate-950 p-2 text-white rounded"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteTodo(t.id)}
                  className="bg-red-600 hover:bg-red-900 p-2 text-white rounded"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default App
