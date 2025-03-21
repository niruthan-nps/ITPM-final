import Header from "@components/header";
import Footer from "@components/footer";
import NavBar from "@components/nav-bar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <NavBar />
      <div className="flex flex-col ml-64 w-full">
        <Header />
        <main className="flex-grow px-8 py-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <p className="mb-4">
            Welcome to your Mental Health Tracker. Track your mood, journal
            entries, and more.
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}
