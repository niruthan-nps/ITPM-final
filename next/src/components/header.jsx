import { User } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { Brain } from "lucide-react";

function Header() {
  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] flex justify-between items-center px-8 py-5 border-b border-[var(--border)]">
      <div className="flex items-center">
        <span className="text-3xl font-bold">MindMate</span>
        <span className="ml-1">
          <Brain size={28} />
        </span>
      </div>
      <nav className="flex space-x-8 list-none font-semibold">
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
    </header>
  );
}
export default Header;
