import { User } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { BookOpenCheck } from "lucide-react";

function NavBar({ currentPage = "dashboard" }) {
  const isActive = (page) => currentPage === page;
  return (
    <nav className="bg-[var(--background)] h-screen w-16 p-6 fixed border-r border-[var(--border)]">
      <ul className="flex flex-col space-y-4 list-none font-semibold items-center">
        <li
          className={`transition-all duration-300 ${
            isActive("dashboard")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <LayoutDashboard size={20} />
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("journals")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <NotebookPen size={20} />
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("blogs")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <BookOpenCheck size={20} />
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("profile")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <User size={20} />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
