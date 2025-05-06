// src/app/page.tsx

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-black text-white p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">EV Store</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Drive the Future</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          Discover premium parts for your Tesla Model 3/Y/S/X.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </section>

      {/* Category Section (Static for now) */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6">
        {["Battery", "Brakes", "Interior", "Exterior"].map((cat) => (
          <div key={cat} className="p-4 border rounded shadow-sm hover:shadow transition">
            <h3 className="text-lg font-semibold">{cat}</h3>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-100 text-center text-sm p-4">
        &copy; {new Date().getFullYear()} EV Store. All rights reserved.
      </footer>
    </div>
  );
}
