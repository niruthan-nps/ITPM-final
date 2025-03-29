import Link from "next/link";
import { User } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { BookOpenCheck } from "lucide-react";

function NavBar({ currentPage = "dashboard" }) {
  const isActive = (page) => currentPage === page;
  return (
    <nav className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 h-screen w-20 pt-24 fixed ">
      <ul className="flex flex-col space-y-8 list-none font-semibold items-center">
        <li
          className={`transition-all duration-300 ${
            isActive("dashboard")
              ? "text-purple-600 transition-transform"
              : "text-gray-600 hover:text-purple-600 transform hover:scale-150"
          }`}
        >
          <Link href="/dashboard">
            <LayoutDashboard size={isActive("dashboard") ? 35 : 20} />
          </Link>
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("journals")
              ? "text-purple-600 transition-transform"
              : "text-gray-600 hover:text-purple-600 transform hover:scale-150"
          }`}
        >
          <Link href="/journals">
            <NotebookPen size={isActive("journals") ? 35 : 20} />
          </Link>
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("blogs")
              ? "text-purple-600 transition-transform"
              : "text-gray-600 hover:text-purple-600 transform hover:scale-150"
          }`}
        >
          <Link href="/blogs">
            <BookOpenCheck size={isActive("blogs") ? 35 : 20} />
          </Link>
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("profile")
              ? "text-purple-600 transition-transform"
              : "text-gray-600 hover:text-purple-600 transform hover:scale-150"
          }`}
        >
          <Link href="/profile">
            <User size={isActive("profile") ? 35 : 20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
