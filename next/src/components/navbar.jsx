function NavBar() {
  return (
    <nav className="flex flex-col space-x-8 list-none font-semibold">
      <li className="hover:text-gray-600 transition-all duration-300">
        <div className="flex items-center">
          <span>Dashboard</span>
          <span className="ml-1">
            <LayoutDashboard size={20} />
          </span>
        </div>
      </li>
      <li className="hover:text-gray-600 transition-all duration-300">
        <div className="flex items-center">
          <span>Journals</span>
          <span className="ml-1">
            <NotebookPen size={20} />
          </span>
        </div>
      </li>
      <li className="hover:text-gray-600 transition-all duration-300">
        <div className="flex items-center">
          <span>Blogs</span>
          <span className="ml-1">
            <BookOpenCheck size={20} />
          </span>
        </div>
      </li>
      <li className="hover:text-gray-600 transition-all duration-300">
        <div className="flex items-center">
          <span>Profile</span>
          <span className="ml-1">
            <User size={20} />
          </span>
        </div>
      </li>
    </nav>
  );
}
export default NavBar;
