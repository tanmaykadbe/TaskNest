function Navbar() {
  return (
    <nav className="bg-violet-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          iTask
        </h1>

        {/* Navigation */}
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
  )
}

export default Navbar
