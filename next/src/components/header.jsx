import { Brain } from "lucide-react";

function Header() {
  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] flex justify-end items-center px-8 py-5 border-b border-[var(--border)]">
      <div className="flex items-center">
        <span className="text-3xl font-bold">MindMate</span>
        <span className="ml-1">
          <Brain size={28} />
        </span>
      </div>
    </header>
  );
}
export default Header;
