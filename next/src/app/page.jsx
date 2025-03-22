import { SmilePlus } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen py-10 px-16 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="flex flex-col justify-start items-center w-64 shrink-0">
        <p className="text-6xl font-bold bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          mindcare
        </p>
        <div className="h-1 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 w-full mt-1"></div>
      </div>
      <div className="mt-10 w-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-left w-1/2 text-left">
          <p className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent text-3xl font-semibold">
            A Private Space To Maintain Your Mental Health
          </p>
          <p className="text-gray-600 font-mono mt-4">
            Mindcare is a private space to maintain your mental health. Track
            your mood, journal entries, and more.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 text-purple-500">
          {/* {
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="brainGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
          </svg>} */}

          <SmilePlus size={350} />
        </div>
      </div>
    </div>
  );
}
