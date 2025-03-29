import { Brain } from "lucide-react";

function Header() {
  return (
    <header className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 text-purple-600 flex justify-end items-center px-8 py-5 w-full ml-auto">
      <div className="flex items-center">
        <span className="text-2xl font-bold">MindMate</span>
        <span className="ml-1">
          <Brain size={28} />
        </span>
      </div>
    </header>
  );
}
export default Header;
