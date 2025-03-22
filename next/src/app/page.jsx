"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SmilePlus } from "lucide-react";
import { WarpBackground } from "@components/magicui/warp-background";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <WarpBackground padding={5}>
      <div className="min-h-screen py-5 px-10 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-lg">
        <div className="flex flex-col justify-start items-center w-64 shrink-0">
          <p className="text-6xl font-bold bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            mindcare
          </p>
          <div className="h-1 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 w-full mt-1"></div>
        </div>
        <div className="mt-10 w-full flex justify-between items-center">
          <div className="flex flex-col justify-center items-left w-1/2 text-left ">
            <p className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent text-3xl font-bold ml-15">
              A Private Space For You!
            </p>
            <p className="text-gray-600 font-mono font-semibold mt-4 ml-15">
              Mindcare is a private space to maintain your mental health. Track
              your mood, journal entries, and more. We are here to help you!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 text-purple-500">
            <SmilePlus size={400} />
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col space-y-5 justify-center items-start ml-15">
          <Link href={"/signup"}>
            <button className="p-4 bg-transparent border border-purple-500 text-purple-500 font-semibold font-mono hover:text-white hover:bg-purple-500 transition-all duration-300 flex items-center group">
              HEY, I AM A NEW USER!
              <span className=" text-white ml-2 hidden group-hover:inline-flex transition-all duration-300">
                <ArrowRight size={20} />
              </span>
            </button>
          </Link>
          <Link href={"/login"}>
            <button className="p-4 bg-transparent border border-purple-500 text-purple-500 font-semibold font-mono hover:text-white hover:bg-purple-500 transition-all duration-300 flex items-center group">
              I ALREADY HAVE AN ACCOUNT
              <span className="text-white ml-2 hidden group-hover:inline-flex transition-all duration-300">
                <ArrowRight size={20} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </WarpBackground>
  );
}
