import Header from "@components/header";
import Footer from "@components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mental Health Tracker</h1>
        <p className="mb-4">
          This is the homepage content. Add your sections here.
        </p>
      </main>
      <Footer />
    </div>
  );
}
