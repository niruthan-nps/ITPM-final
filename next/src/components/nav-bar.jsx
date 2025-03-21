import { User } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { BookOpenCheck } from "lucide-react";

function NavBar() {
  return (
    <nav className="bg-bg-[var(--background)] h-screen w-16 p-6 fixed border-r border-[var(--border)]">
      <ul className="flex flex-col space-y-4 list-none font-semibold items-center">
        <li className="hover:text-gray-600 transition-all duration-300">
          <LayoutDashboard size={20} />
          {/* <div className="flex items-center"> */}
        </li>
        <li className="hover:text-gray-600 transition-all duration-300">
          <NotebookPen size={20} />
        </li>
        <li className="hover:text-gray-600 transition-all duration-300">
          <BookOpenCheck size={20} />
        </li>
        <li className="hover:text-gray-600 transition-all duration-300">
          <User size={20} />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
