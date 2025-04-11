"use client";
import NavBar from "@components/nav-bar";
import Header from "@components/header";
import Footer from "@components/footer";
import UserRouteProtection from "@components/user-route";
import { useEffect, useState } from "react";
import axios from "axios";

function JournalsPage() {
  return (
    <UserRouteProtection>
      <div className="flex min-h-screen">
        <NavBar />
        <div className="flex flex-col ml-20 w-full">
          <Header />
          <main className="flex-grow px-8 py-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-xl shadow-md p-6 max-w-full">
              <div className="top-6 right-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Journals</h1>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </UserRouteProtection>
  );
}
export default JournalsPage;
