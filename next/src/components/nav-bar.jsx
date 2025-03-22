import Link from "next/link";
import { User } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { BookOpenCheck } from "lucide-react";

function NavBar({ currentPage = "dashboard" }) {
  const isActive = (page) => currentPage === page;
  return (
    <nav className="bg-[var(--background)] h-screen w-20 p-6 fixed border-r border-[var(--border)]">
      <ul className="flex flex-col space-y-8 list-none font-semibold items-center">
        <li
          className={`transition-all duration-300 ${
            isActive("dashboard")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <Link href="/dashboard">
            <LayoutDashboard size={30} />
          </Link>
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("journals")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <Link href="/journals">
            <NotebookPen size={30} />
          </Link>
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("blogs")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <Link href="/blogs">
            <BookOpenCheck size={30} />
          </Link>
        </li>
        <li
          className={`transition-all duration-300 ${
            isActive("profile")
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <Link href="/profile">
            <User size={30} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
