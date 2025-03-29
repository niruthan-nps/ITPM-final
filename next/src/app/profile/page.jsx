"use client";
import UserRouteProtection from "@components/user-route";
import NavBar from "@components/nav-bar";
import Header from "@components/header";
import Footer from "@components/footer";
import { useRouter } from "next/navigation";

function ProfilePage() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <UserRouteProtection>
      <div className="flex min-h-screen">
        <NavBar />
        <div className="flex flex-col ml-20 w-full">
          <Header />
          <main className="flex-grow px-8 py-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-xl shadow-md p-6 max-w-full">
              <div className="top-6 right-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Profile</h1>
              </div>
              <button
                onClick={handleLogout}
                className=" mt-5 p-3 bg-transparent border border-purple-500 text-purple-500 font-semibold font-mono hover:text-white hover:bg-purple-500 transition-all duration-300"
              >
                Log Out
              </button>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </UserRouteProtection>
  );
}
export default ProfilePage;
