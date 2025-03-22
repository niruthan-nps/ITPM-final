import { Brain } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="flex flex-col justify-start items-center w-64 shrink-0">
        <p className="text-6xl font-bold text-white">Mindcare</p>
        <div className="h-1 bg-blue-400 w-full mt-1"></div>
      </div>
      <div className="mt-10 w-full flex justify-between items-center">
        <h2 className="text-white text-3xl font-semibold">
          A Private Space To Maintain Your Mental Health
        </h2>
        <Brain size={320} color="white" />
      </div>
    </div>
  );
}
