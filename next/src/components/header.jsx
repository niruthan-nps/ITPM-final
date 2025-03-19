import { User } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { BookOpenCheck } from "lucide-react";

function Header() {
  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] flex justify-between items-center px-8 py-5 border-b border-[var(--border)]">
      <div className="shrink-0">
        <h1 className="text-2xl font-bold">Mental Health Tracker</h1>
      </div>
      <nav className="flex space-x-5 list-none text-[var(--foreground)] font-semibold">
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
          <User size={24} />
        </li>
      </nav>
    </header>
  );
}
export default Header;
